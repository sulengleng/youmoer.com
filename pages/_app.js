import { ThemeProvider } from 'next-themes'
import "styles/app.scss";
import "styles/blog.scss";
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
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <DefaultSeo
          title="你好，我是夜游船!"
          description="我是学生、创造者、设计师"
          canonical={canonicalUrl}
          openGraph={{
            site_name: "你好，我是夜游船!",
            title: "你好，我是夜游船!",
            description:
              "我是学生、创造者、设计师",
            images: [
              {
                url: "https://files.catbox.moe/hdr5ve.png",
                width: 800,
                height: 600,
                alt: "yeyouchuan for Jike",
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
              href: "/touch-icons/apple-touch-icon-ipad-retina-152x152.png",
            },
            {
              rel: "apple-touch-icon",
              href: "/touch-icons/apple-touch-icon-ipad-76x76.png",
              sizes: "60x60",
            },
            {
              rel: "apple-touch-icon",
              href: "/touch-icons/apple-touch-icon-ipad-retina-152x152.png",
              sizes: "144x144",
            },
            {
              rel: "apple-touch-icon",
              href: "/touch-icons/apple-touch-icon-iphone-60x60.png",
              sizes: "60x60",
            },
            {
              rel: "apple-touch-icon",
              href: "/touch-icons/apple-touch-icon-iphone-retina-120x120.png",
              sizes: "114x114",
            },
          ]}
        />

        {process.env.NODE_ENV == "production" ? (
          // Analytics Script
          <Script
            src="https://api.pirsch.io/pirsch.js"
            id="pirschjs"
            data-code={process.env.NEXT_PUBLIC_PIRSCH_KEY}
            strategy="afterInteractive"
          />
        ) : (
          ""
        )}

        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        
        <Component {...pageProps} />
          <Analytics />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
