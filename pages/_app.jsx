import { ThemeProvider } from 'next-themes'
import "styles/app.scss";
import "styles/blog.scss";
import "styles/styles.css";
import MainLayout from "layouts/main";
import {DefaultSeo} from "next-seo";
import Head from "next/head";
import Script from "next/script";
import {useRouter} from "next/router";
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.youmoer.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem={true}>
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
            rel="stylesheet">
          </link>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          />
          <script defer data-domain="yeyouchuan.me" src="https://plausible.io/js/script.js"></script>
          <script async src="http://localhost:3000/script.js" data-website-id="c4b57bf6-10c2-49cd-96dd-a344fb44f619"></script>
        </Head>
        <DefaultSeo
          title="你好，我是油墨儿!"
          description="一名还在路上创造者，喜欢创造有设计感的东西。"
          canonical={canonicalUrl}
          openGraph={{
            site_name: "你好，我是油墨儿!",
            title: "你好，我是油墨儿!",
            description:
              "一名还在路上创造者，喜欢创造有设计感的东西",
            images: [
              {
                url: "public/images/cover.webp",
                width: 800,
                height: 600,
                alt: "www.youmoer.com",
              },
            ],
          }}
          twitter={{
            handle: "@2youmoer",
            site: "@2youmoer",
            cardType: "summary_large_image",
          }}
          additionalLinkTags={[
            {
              rel: "apple-touch-icon",
              href: "public/images/pages/cover-152.png",
            },
            {
              rel: "apple-touch-icon",
              href: "public/images/pages/cover-76.png",
              sizes: "60x60",
            },
            {
              rel: "apple-touch-icon",
              href: "public/images/pages/cover-152.png",
              sizes: "144x144",
            },
            {
              rel: "apple-touch-icon",
              href: "public/images/pages/cover-60.png",
              sizes: "60x60",
            },
            {
              rel: "apple-touch-icon",
              href: "public/images/pages/cover-120.png",
              sizes: "114x114",
            },
          ]}
        />

        <Analytics>
          <Component {...pageProps} />
          <Analytics />
        </Analytics>

        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </>
    </ThemeProvider>
  );
}

export default MyApp;