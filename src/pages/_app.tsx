import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/global.css';
import type { AppProps } from 'next/app';

const ALL_ROUTES = [
  '/',
  '/retreats',
  '/convention',
  '/prayer',
  '/thanksgiving',
  '/inspiration',
  '/gallery',
  '/institutions',
  '/contact',
  '/videos'
];

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // Instant Route Pre-warming: Silently prefetch all routes during browser idle time
  useEffect(() => {
    const prefetchRoutes = () => {
      ALL_ROUTES.forEach((route) => {
        if (router.pathname !== route) {
          router.prefetch(route);
        }
      });
    };

    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(prefetchRoutes);
      } else {
        setTimeout(prefetchRoutes, 500);
      }
    }
  }, [router]);

  return <Component {...pageProps} />;
};

export default MyApp;
