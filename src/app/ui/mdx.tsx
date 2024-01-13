import { MDXRemote } from 'next-mdx-remote/rsc'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { highlight } from 'sugar-high'
import { getHighlighter } from 'shiki'
import { getBase64 } from '@/app/lib/getBase64'

function CustomLink(props: any) {
  const href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

async function RoundedImage(props: any) {
  const base64 = await getBase64(props.src)

  return (
    <figure>
      <Image
        alt={props.alt}
        className="rounded-lg"
        blurDataURL={base64}
        {...props}
      />
      {props.alt && <figcaption>{props.alt}</figcaption>}
    </figure>
  )
}

function Callout(props: any) {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  )
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode & string }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children,
    )
  }
}

async function Code(codeProps: any) {
  const highlighter = await getHighlighter({
    theme: 'nord',
    langs: ['shell', 'typescript', 'tsx'],
  })
  const { children, ...props } = codeProps

  let codeHTML = highlighter.codeToHtml(children, { lang: 'tsx' })
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

export const customComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  code: Code,
}

export function MDXContent(props: any) {
  return <MDXRemote {...props} components={{ ...customComponents, ...(props.components || {}) }} />
}
