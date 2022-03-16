import type { AppProps } from "next/app";
import "../styles/globals.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Mike M | Fullstack Developer"
        titleTemplate="Mike M | Fullstack Developer"
        defaultTitle="Mike M | Fullstack Developer"
        description="G'day, I'm Mike Marcucci a Fullstack Next.js/React web developer and recent bootcamp graduate"

        // openGraph={{
        //   url: "https://www.anurag.tech/",
        //   title: "Anurag | Frontend Developer",
        //   description:
        //     "Hey! I'm Anurag, A Frontend Developer, Blogger and a Student!",
        //   images: [
        //     {
        //       url: "https://res.cloudinary.com/ddum5vpp3/image/upload/v1643532760/og-image_dwcwhp.png",
        //       width: 800,
        //       height: 420,
        //       alt: "Anurag | Frontend Developer",
        //     },
        //   ],
        // }}
        twitter={{
          handle: "@MichaelMarcucc9",
          site: "@MichaelMarcucc9",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, fullstack developer, web development, web developer, tech enthusiast, jamstack, mern",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assets/me.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
