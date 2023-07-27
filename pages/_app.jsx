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
    `https://yeyouchuan.me` + (router.asPath === "/" ? "" : router.asPath)
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
          <script defer data-domain="yeyouchuan.me" src="https://plausible.io/js/script.js"></script>
          <script async src="http://localhost:3000/script.js" data-website-id="c4b57bf6-10c2-49cd-96dd-a344fb44f619"></script>
        </Head>
        <DefaultSeo
          title="你好，我是夜游船!"
          description="一名还在路上创造者，喜欢创造有设计感的东西。"
          canonical={canonicalUrl}
          openGraph={{
            site_name: "你好，我是夜游船!",
            title: "你好，我是夜游船!",
            description:
              "一名还在路上创造者，喜欢创造有设计感的东西",
            images: [
              {
                url: "public/images/Cover.png",
                width: 800,
                height: 600,
                alt: "yeyouchuan.me",
              },
            ],
          }}
          twitter={{
            handle: "@yeyouchuan",
            site: "@yeyouchuan",
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