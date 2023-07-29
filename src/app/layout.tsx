import { Providers } from './providers'

export const metadata = {
  title: 'Jackpot Syndicate',
  description:
    "If you're a creator who wants to take your content to the next level, contact us today. Our turnkey spaces, such as a sound stage, recording studio, podcast suite, and YouTube room, allow creators to collaborate with our skilled team to create quality content that will maximize their earnings across social platforms. We can even do it live.",
  keywords: [
    'studio',
    'content creator',
    'influencer',
    'recording',
    'podcast',
    'production',
    'photography',
    'youtube',
    'streaming',
    'social media',
  ],
  author: 'James B',
  creator: 'James B',
  robots: {
    index: true,
    follow: false,
    nocache: false,
    noarchive: false,
    nosnippet: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

