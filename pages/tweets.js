import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import Tweet from '@/components/Tweet';
import { getTweets } from '@/lib/twitter';

const url = 'https://leerob.io/tweets';
const title = 'Tweets – Lee Robinson';
const description =
  'A collection of tweets that inspire me, make me laugh, and make me think.';

export default function Tweets({ tweets }) {
  return (
    <Container>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Tweets
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is a collection of tweets I've enjoyed. I use Twitter quite a
          bit, so I wanted a place to publically share what inspires me, makes
          me laugh, and makes me think.
        </p>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const tweets = await getTweets([
    '935857414435495937',
    '1334528781139259400',
    '1334334544598740994',
    '826528907381739520',
    '997895977179721728',
    '1341090253864542208',
    '1026872652290379776',
    '1340107217970683906',
    '992629481578745856',
    '989142253468708864',
    '807626710350839808',
    '1341962177272537089',
    '1116362674319908864',
    '1331380003716681728',
    '1002104154737684480'
  ]);

  return { props: { tweets } };
}