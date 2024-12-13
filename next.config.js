/** @type {import('next').NextConfig} */
// const ContentSecurityPolicy = `
// default-src 'self';
// frame-src 'self' player.vimeo.com 19vod-adaptive.akamaized.net i.vimeocdn.com;
// `

const ContentSecurityPolicy = `
 default-src 'self' vitals.vercel-insights.com/v1/vitals;
 font-src 'self';
 img-src 'self' data:;
 script-src 'self' 'unsafe-inline' 'unsafe-eval' player.vimeo.com pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3446163124599892 www.googletagmanager.com;
 style-src 'self' 'unsafe-inline';
 frame-src 'self' player.vimeo.com 19vod-adaptive.akamaized.net;
`;

// console.log(JSON.stringify(ContentSecurityPolicy))
// console.log(
//   JSON.stringify(ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim())
// )

const nextConfig = {
  trailingSlash: true,
  // experimental: {
  // serverActions: true, // This is now enabled by default (NextJS 14)
  // },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
