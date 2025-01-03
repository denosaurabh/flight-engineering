import Footer from 'components/layout/footer';
import Navbar from 'components/layout/navbar';
import { GeistSans } from 'geist/font';
import { ensureStartsWith } from 'lib/utils';
import { ReactNode, Suspense } from 'react';
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="mx-auto mt-12 min-h-screen max-w-4xl px-4">
        <p className="mb-6 rounded-md bg-foreground/5 px-4 py-2 text-sm font-bold text-foreground/70">
          25% off on all preorders before 25 March
        </p>

        <Navbar />
        <Suspense>
          <main className="mb-28 mt-12">{children}</main>
        </Suspense>

        <Suspense>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
