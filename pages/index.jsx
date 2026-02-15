import React from 'react';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import About from '../src/components/About';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
    </>
  );
}

// Use getServerSideProps for SSR on the homepage (SEO / dynamic data can be added later)
export async function getServerSideProps() {
  return { props: {} };
}

