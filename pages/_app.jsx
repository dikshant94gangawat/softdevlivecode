import React, { useEffect } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import '../src/styles/index.css';
import '../src/styles/App.css';
// Component-level CSS imports have been moved into each component as CSS Modules.
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

