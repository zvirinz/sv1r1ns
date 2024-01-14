import { SOCIAL_LINKS } from '@/app/lib/constants'
import { NowPlaying } from '@/app/ui/now-playing'
import { Spinner } from '@/app/ui/spinner'
import Image from 'next/image'
import { Suspense } from 'react'

export function Footer() {
  return (
    <footer className="flex flex-col">
      <hr />
      <div className="flex  mb-8 space-x-0 sm:space-x-2">
        <Suspense
          fallback={
            <Spinner
              text="Loading player..."
              classNames="min-h-[54px] md:min-h-[30px]"
            />
          }
        >
          <NowPlaying />
        </Suspense>
      </div>
      <div className="flex flex-col">
        <div className="my-2 space-x-4 flex flex-row">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              title={link.text}
              className="duration-150 transform ease-in-out hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={link.iconSrc}
                alt={link.text}
                width={18}
                height={18}
              />
            </a>
          ))}
        </div>
        <div className=" text-gray-400 text-xs md:text-sm mt-8">
          © <span className="font-medium">{new Date().getFullYear()}</span>
          <span>{` • `}</span>
          Dzmitry Svirin
        </div>
        <div className="text-xs md:text-sm text-gray-400 mt-1">
          <span>The code of this site was originally a fork of </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-300  font-medium link-underlined "
            href="https://leerob.io"
          >
            Lee Robinson
          </a>
          {` `}personal site,
          <span>almost entirely rewritten.</span>
        </div>
      </div>
    </footer>
  )
}
