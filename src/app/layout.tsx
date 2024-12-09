import { Providers } from './providers';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title: 'Jackpot Syndicate',
  description:
    "If you're a creator who wants to take your content to the next level, contact us today. Our turnkey spaces, such as a sound stage, recording studio, podcast suite, and YouTube room, allow creators to collaborate with our skilled team to create quality content that will maximize their earnings across social platforms. We can even do it live.",
  keywords: [
    'studio',
    'video production service',
    'content creator',
    'influencer',
    'recording',
    'podcast',
    'photography',
    'youtube',
    'streaming',
    'social media',
    'el segundo',
    'broadcast',
    'live',
    'aerial',
    'jellysmack',
    'UGC',
  ],
  author: 'James B',
  creator: 'James B',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    nosnippet: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <Script
          async
          src={'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3446163124599892'}
          crossOrigin={'anonymous'}
          strategy={'lazyOnload'}
        />
      </head>
      <GoogleTagManager gtmId={'G-R82LD1WYCH'} />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
