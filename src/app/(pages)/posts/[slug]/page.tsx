import Image from 'next/image';
// import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // return allPosts.map((post) => ({
  //   // slug: post._raw.flattenedPath,
  //   slug: post.slug
  // }));
  return ['test'];
}
export default async function PostPage({
  params
}: {
  params: {
    slug: string;
    searchParams: URLSearchParams;
  };
}) {
  // const post = allPosts.find((post) => post.slug === params.slug);
  // if (!post) notFound();
  // const MDXContent = useMDXComponent(post.body.code);
  // const { title, slug, image, date, description } = post;
  // console.log(title, slug, image, date, description);
  // const readingTime = Math.round(String(post.body.raw).length / 5 / 180) ?? 1;
  const readingTime = 1;
  return (
    // <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-12">
    //   <div className="flex flex-wrap w-full md:pb-2">
    //     {post.tags &&
    //       post.tags.map((tag) => (
    //         <div
    //           key={tag}
    //           className="mr-2 text-sm md:text-base font-medium text-gray-400  lowercase"
    //         >
    //           {`#${tag}`}
    //         </div>
    //       ))}
    //   </div>
    //   <h1 className="my-2 text-3xl font-bold  tracking-tight capsize   md:text-5xl text-gray-100">
    //     {post.title}
    //   </h1>
    //   {post.image && (
    //     <div className="flex flex-col w-full my-4">
    //       <Image src={post.image} alt={post.title} />
    //     </div>
    //   )}
    //   <div className="flex flex-row items-start justify-between w-full mt-2 tems-center">
    //     <div className="flex items-center">
    //       <Image
    //         alt="Dzmitry Svirin"
    //         height={36}
    //         width={36}
    //         src="/svirins.png"
    //         className="rounded-full"
    //       />
    //       <p className="ml-2 text-xs md:text-sm lg:text-base  text-gray-400">
    //         <a
    //           className="  text-gray-300  font-medium link-underline link-underline-gradient"
    //           href="https://twitter.com/svirins"
    //         >
    //           Dzmitry Svirin
    //         </a>
    //         {` • `}
    //         {new Intl.DateTimeFormat('en-US', {
    //           year: 'numeric',
    //           month: 'long',
    //           day: 'numeric'
    //         }).format(new Date(post.date))}
    //       </p>
    //     </div>
    //     <p className="mt-2 text-xs md:text-sm lg:text-base  text-gray-400 min-w-32">
    //       {readingTime}
    //     </p>
    //   </div>
    //   <div className="w-full max-w-2xl mt-4 prose  prose-invert  md:prose-lg">
    //     {/* MDX Component */}
    //   </div>
    // </article>
    <p>none</p>
  );
}
