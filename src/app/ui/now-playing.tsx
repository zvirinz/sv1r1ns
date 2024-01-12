export const runtime = 'edge'
import { unstable_noStore } from 'next/cache'

async function getSpotifyResponse() {
  const basic = btoa(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`)
  try {
    const tokenResponse = await fetch(process.env.SPOTIFY_TOKEN_ENDPOINT!, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
      }),
    })
    const { access_token } = await tokenResponse.json()
    const res = await fetch(process.env.SPOTIFY_NOW_PLAYING_ENDPOINT!, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      // next: { revalidate: 0 },
    })
    if (res.status === 204) {
      return {
        message: 'API called ok. Returning not playing',
        is_playing: false,
        status: 200,
      }
    }
    if (res.status > 400) {
      return {
        message: 'Spotify API error',
        is_playing: false,
        status: res.status,
      }
    }
    const data = await res.json()
    return {
      message: 'API called ok. Returning data',
      is_playing: data?.is_playing as boolean,
      title: data?.item.name as string,
      artist: data?.item.artists
        .map((_artist: { name: string }) => _artist.name)
        .join(', ') as string,
      songUrl: data?.item.external_urls.spotify as string,
      status: 200,
    }
  } catch (e) {
    return {
      message: e instanceof Error ? e.message : 'API call failed due to the Unknown error',
      is_playing: false,
      status: 500,
    }
  }
}

export async function NowPlaying() {
  unstable_noStore()
  const res = await getSpotifyResponse()
  if (!res.is_playing) {
    return <SpotifyStopped />
  }
  const { title, artist, songUrl } = res

  return (
    <div className="flex flex-row-reverse items-center sm:flex-row mb-8 space-x-0 sm:space-x-2 w-full">
      <div className="inline-flex flex-col sm:flex-row w-full max-w-full truncate self-baseline">
        <AnimatedBars />
        <a
          className=" text-gray-300 font-medium   text-sm max-w-max truncate"
          href={songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <span className=" mx-2 text-gray-400 hidden sm:block">{'-'}</span>
        <p className=" text-gray-300 max-w-max truncate text-left text-sm">{artist}</p>
      </div>
    </div>
  )
}
function AnimatedBars() {
  return (
    <div className="w-auto flex items-end overflow-hidden md:mb-4 pr-2">
      <svg
        id="loading-bar"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="14"
        viewBox="0 0 16 14"
      >
        <g>
          <rect id="loading-bar-1" width="3" height="14" fill="#4ade80" />
          <rect id="loading-bar-2" width="3" height="14" x="4" fill="#4ade80" />
          <rect id="loading-bar-3" width="3" height="14" x="8" fill="#4ade80" />
          <rect id="loading-bar-4" width="3" height="14" x="12" fill="#4ade80" />
        </g>
      </svg>
    </div>
  )
}

function SpotifyStopped() {
  return (
    <div className="flex flex-row-reverse items-center sm:flex-row mb-8 space-x-0 sm:space-x-2 w-full">
      <div className="inline-flex flex-col sm:flex-row w-full max-w-full truncate self-baseline">
        <svg className="h-4 w-4" viewBox="0 0 168 168">
          <path
            fill="#1ED760"
            d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
          />
        </svg>
        <span className="pl-2 text-gray-300 text-left text-sm">Not Playing</span>
      </div>
    </div>
  )
}
