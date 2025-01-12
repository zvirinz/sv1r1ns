'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NAV_LINKS } from '@/lib/constants'
import { isActiveLink } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  return (
    <div className="justify-start">
      <nav className="ml-[0.20rem]  w-full relative  mx-auto  pb-8 md:pb-16">
        <div>
          {NAV_LINKS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`inline-block transition-all mr-5 duration-150  hover:text-gray-200 ease-in-out text-lg ${isActiveLink(item.href, pathname) ? 'font-semibold  text-gray-200 ' : 'font-medium text-gray-400'}`}
            >
              <span className="">{item.text}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
