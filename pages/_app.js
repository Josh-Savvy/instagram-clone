import "../public/styles/globals.css";
import Head from "next/head";
// import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/avatar.jpg"
          type="image/x-icon"
        />
        <title>{`Instagram Clone By Joshua Joseph`}</title>

        <meta name="title" content="Instagram Clone By Joshua Joseph" />
        <meta name="description" content="Instagram Clone By Joshua Joseph" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Instagram Clone By Joshua Joseph" />
        <meta
          property="og:description"
          content="Instagram Clone By Joshua Joseph"
        />
        <meta property="og:image" content="/avatar.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Instagram Clone By Joshua Joseph" />
        <meta
          property="twitter:description"
          content="Instagram Clone By Joshua Joseph"
        />
        <meta property="twitter:image" content="/avatar.jpg" />
      </Head>
      <Component {...pageProps} />
      {/* <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      ></Script>
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script> */}
    </>
  );
}

export default MyApp;