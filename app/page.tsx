import { FAQ } from 'components/faq';
import { HowButton } from 'components/how-button';
import { ProductsList } from 'components/list';
import { Newsletter } from 'components/newsletter';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      {/* <ThreeItemGrid /> */}
      <div className="mx-auto flex flex-col gap-16">
        <div className="flex flex-col">
          <h2 className="text font-semibold">the problem?</h2>
          <p className="text-foreground/80">the problem. </p>

          <HowButton />
        </div>

        <ProductsList />
        <FAQ className="mt-12" />
        <Newsletter />
      </div>
    </>
  );
}
