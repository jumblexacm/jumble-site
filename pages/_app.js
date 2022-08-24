import '../styles/globals.css';
import Script from 'next/script';
import Layout from '../components/Layout';
import Head from 'next/head';
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
      hotjar.initialize(
        process.env.NEXT_PUBLIC_HOTJAR_SITE_ID,
        process.env.NEXT_PUBLIC_HOTJAR_SV
      );
  }, []);
  
  return (
    <>
      <Head>
        <title>Jumble</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
      `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
