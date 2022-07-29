import cn from 'classnames';
import Link from 'next/link';
import useDelayedRender from 'use-delayed-render';
import { useState, useEffect } from 'react';
import styles from '@/styles/mobile-menu.module.css';
import { NAV_LINKS } from '@/config';
import { useRouter } from 'next/router';
import { getActiveStatus } from '@/lib/utils';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300
    }
  );
  const router = useRouter();

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            'flex flex-col absolute bg-bg-gray-50 dark:bg-gray-900',
            isMenuRendered && styles.menuRendered
          )}
        >
          {NAV_LINKS.map((item, index) => (
            <li
              key={index}
              className="border-b border-gray-300 dark:border-gray-700"
              style={{ transitionDelay: '150ms' }}
            >
              <Link href={item.href}>
                <a
                  className={cn(
                    getActiveStatus(item.href, router.asPath)
                      ? 'font-semibold text-signal dark:text-signal-dark'
                      : 'font-normal text-gray-700 dark:text-gray-400',
                    'transition-all  duration-150 hover:text-signal dark:hover:text-signal-dark ease-in-out flex w-auto pb-4  text-sm'
                  )}
                >
                  {item.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 4.5h15m-15 6h15m-15 6h15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
