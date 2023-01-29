'use client';
import { IconContext } from 'react-icons';

import {
  SiAlgolia,
  SiAmazonaws,
  SiChakraui,
  SiCss3,
  SiDebian,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiGmail,
  SiGraphql,
  SiHeroku,
  SiJest,
  SiLinux,
  SiMapbox,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPnpm,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSahibinden,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTwitter,
  SiTypescript,
  SiVercel
} from 'react-icons/si';

export const SOCIALS = [
  {
    Icon: <SiGithub />,
    url: 'https://github.com/svirins',
    iconTitle: 'My GitHub'
  },
  {
    Icon: <SiTwitter />,
    url: 'https://twitter.com/svirins',
    iconTitle: 'My Twitter'
  },
  {
    Icon: <SiGmail />,
    url: 'mailto:svirins@gmail.com',
    iconTitle: 'My Gmail'
  }
];

export const STACKS = [
  {
    Icon: <SiAlgolia />,
    url: 'https://www.algolia.com/',
    iconTitle: 'Algolia',
    color: '#00BFB3',
    featured: true
  },
  {
    Icon: <SiAmazonaws />,
    url: 'https://aws.amazon.com/',
    iconTitle: 'Amazon AWS',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiChakraui />,
    url: 'https://chakra-ui.com/',
    iconTitle: 'Chakra UI',
    color: '#00BFB3',
    featured: true
  },
  {
    Icon: <SiCss3 />,
    url: 'https://golang.org/',
    iconTitle: 'CSS3',
    color: '#FFC107'
  },
  {
    Icon: <SiDebian />,
    url: 'https://kubernetes.io/',
    iconTitle: 'Debian',
    color: '#FFC107'
  },

  {
    Icon: <SiDocker />,
    url: 'https://kubernetes.io/',
    iconTitle: 'Docker',
    color: '#FFC107'
  },
  {
    Icon: <SiExpress />,
    url: 'https://www.typescriptlang.org/',
    iconTitle: 'Express',
    color: '#FFC107'
  },
  {
    Icon: <SiFigma />,
    url: 'https://graphql.org/',
    iconTitle: 'Figma',
    color: '#FFC107'
  },
  {
    Icon: <SiFirebase />,
    url: 'https://firebase.google.com/',
    iconTitle: 'Firebase',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiFramer />,
    url: 'https://aws.amazon.com/',
    iconTitle: 'Framer',
    color: '#FFC107'
  },
  {
    Icon: <SiGraphql />,
    url: 'https://graphql.org/',
    iconTitle: 'GraphQL',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiHeroku />,
    url: 'https://elixir-lang.org/',
    iconTitle: 'Heroku',
    color: '#FFC107'
  },
  {
    Icon: <SiJest />,
    url: 'https://jestjs.io/',
    iconTitle: 'Jest',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiLinux />,
    url: 'https://www.linux.org/',
    iconTitle: 'Linux',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiMapbox />,
    url: 'https://www.postgresql.org/',
    iconTitle: 'Mapbox',
    color: '#FFC107'
  },
  {
    Icon: <SiMysql />,
    url: 'https://www.mysql.com/',
    iconTitle: 'MySQL',
    color: '#FFC107'
  },
  {
    Icon: <SiNodedotjs />,
    url: 'https://www.postgresql.org/',
    iconTitle: 'Node.js',
    color: '#FFC107'
  },
  {
    Icon: <SiNextdotjs />,
    url: 'https://www.nextjs.org/',
    iconTitle: 'Nextjs',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiPostgresql />,
    url: 'https://www.postgresql.org/',
    iconTitle: 'PostgreSQL',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiPrisma />,
    url: 'https://www.prisma.io/',
    iconTitle: 'Prisma',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiPnpm />,
    url: 'https://www.python.org/',
    iconTitle: 'PnPM',
    color: '#FFC107'
  },
  {
    Icon: <SiReact />,
    url: 'https://www.reactjs.org/',
    iconTitle: 'React',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiSahibinden />,
    url: 'https://www.sanity.io/',
    iconTitle: 'Sanity',
    color: '#FFC107',
    featured: true
  },

  {
    Icon: <SiStripe />,
    url: 'https://www.stripe.com/',
    iconTitle: 'Stripe',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiSupabase />,
    url: 'https://www.supabase.com/',
    iconTitle: 'Supabase',
    color: '#FFC107',
    featured: false
  },
  {
    Icon: <SiTailwindcss />,
    url: 'https://www.tailwindscss.com/',
    iconTitle: 'Tailwind CSS',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiTypescript />,
    featured: true,
    url: 'https://www.typescriptlang.org/',
    iconTitle: 'Typescript',
    color: '#FFC107'
  },
  {
    Icon: <SiVercel />,
    url: 'https://vercel.com/',
    iconTitle: 'Vercel',
    color: '#FFC107',
    featured: true
  }
];

export function StackIcon({ iconTitle }: { iconTitle: string }) {
  const { Icon, url } =
    STACKS.find((stack) => stack.iconTitle === iconTitle) ?? STACKS[0];
  return (
    <a
      className="duration-150 transform  ease-in-out hover:scale-110"
      href={url}
      title={iconTitle}
      target="_blank"
      rel="noopener noreferrer"
    >
      {Icon}
    </a>
  );
}

export function SnippetIcon({ iconTitle }: { iconTitle: string }) {
  const { Icon } =
    STACKS.find((stack) => stack.iconTitle === iconTitle) ?? STACKS[0];
  return (
    <IconContext.Provider
      value={{
        className: 'w-7 h-7 md:w-8 md:h-8 fill-gray-900  dark:fill-gray-100'
      }}
    >
      {Icon}
    </IconContext.Provider>
  );
}

export function SocialIcons() {
  return (
    <IconContext.Provider
      value={{
        className:
          'w-4 h-4 fill-gray-700  dark:fill-gray-400  hover:fill-gray-800 dark:hover:fill-gray-200'
      }}
    >
      <div className="flex my-2 space-x-4 text-left md:text-center">
        {SOCIALS.map((social, index) => (
          <a
            key={index}
            href={social.url}
            title={social.iconTitle}
            className="duration-150 transform  ease-in-out hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.Icon}
          </a>
        ))}
      </div>
    </IconContext.Provider>
  );
}

export function MyStack() {
  return (
    <IconContext.Provider
      value={{
        className:
          'w-7 h-7 md:w-8 md:h-8  fill-gray-700  dark:fill-gray-300  hover:fill-gray-800 dark:hover:fill-gray-200'
      }}
    >
      <div className="grid grid-cols-6 md:grid-cols-8 items-center place-content-between max-w-2xl gap-x-12 gap-y-6 mx-auto w-full">
        {STACKS.filter((el) => el.featured).map((el, index) => (
          <StackIcon key={index} iconTitle={el.iconTitle} />
        ))}
      </div>{' '}
    </IconContext.Provider>
  );
}