import Image from 'next/future/image';
import { getWakaStats } from '@/lib/waka-api';
import Container from '@/components/Container';
import { IWakaLangStats } from '@/typings';
import Twemoji from '@/components/Twemoji';

import WakaStats from '@/components/WakaStats';
import { useMemo } from 'react';
import StackIcon, { STACKS } from '@/components/StackIcon';
// replace prose
export default function About({ stats }: { stats: IWakaLangStats[] }) {
  const memoizedStacks = useMemo(() => STACKS.filter((el) => el.featured), []);
  return (
    <Container title="About page | Dzmitry Svirin">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="text-3xl md:text-5xl tracking-tight capsize text-black dark:text-white mb-6 font-semibold">
              Hi, I am Dzmitry&nbsp;
              <Twemoji emoji="👋" />
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 tracking-tight text-gray-800 dark:text-gray-200 font-medium">
              I <em>build</em> things for the web.
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              I&apos;m a full-stack developer passionate about{' '}
              <span className="font-medium">TypeScript</span>,{' '}
              <span className="font-medium">React</span> ecosystem and&nbsp;
              <span className="font-medium">serverless</span> backends .
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Currently, self-employed person, based in{' '}
              <span className="font-medium">Tbilisi</span>, 🇬🇪
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              In my free time I enjoy, cycling, swimming and good books.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Dzmitry Svirin"
              height={176}
              width={176}
              src="/svirins.webp"
              className="rounded-full grayscale"
              sizes="30vw"
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto pb-16 w-full">
        <div className="flex flex-col items-start">
          <h2 className="text-xl md:text-2xl mt-6 tracking-tight text-gray-700 dark:text-gray-200 font-medium">
            My <em>values</em>:
          </h2>
          <p className="">
            <ul className=" marker:text-gray-700 marker:dark:text-gray-300">
              <li className="text-gray-700 dark:text-gray-300">
                deliver logical, efficient, well-documented code, following best
                practices
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                create value for business
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                honesty, reliability, responsibility
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                be a good person to myself and others
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                learn iteratively
              </li>
            </ul>
          </p>
          <h2 className="text-xl md:text-2xl mb-6 mt-2 tracking-tight text-gray-700 dark:text-gray-200 font-medium">
            Technologies I use <em>frequently</em>:
          </h2>
          <div className="grid grid-cols-6 md:grid-cols-8  items-center place-content-between min-w-2xl gap-12 mx-auto w-full">
            {memoizedStacks.map((el, index) => (
              <StackIcon key={index} iconTitle={el.iconTitle} isLink={true} />
            ))}
          </div>
          <h2 className="text-xl md:text-2xl mb-6 mt-6 tracking-tight text-gray-700 dark:text-gray-200 font-medium">
            Last week I was <em>coding</em> in:
          </h2>
          <WakaStats stats={stats} />
          <h2 className="text-xl md:text-2xl mt-6 tracking-tight text-gray-700 dark:text-gray-200 font-medium">
            Feel free to ask me <em>anything</em>:
          </h2>
          <div className="prose dark:prose-dark">
            <ul>
              <li>
                Twitter: <a href="https://twitter.com/svirins">@svirins</a>
              </li>
              <li>
                GitHub: <a href="https://github.com/svirins">@zvirinz</a>
              </li>
              <li>
                Mail: <a href="mailto:svirins@gmail.com">svirins@gmail.com</a>
              </li>
              <li>
                Download resume{' '}
                <a href="/static/resume_dzmitry_sviryn.pdf">here</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="h-16" />
    </Container>
  );
}

export async function getStaticProps() {
  const { languages } = await getWakaStats();
  return { props: { stats: languages }, revalidate: 86400 };
}
