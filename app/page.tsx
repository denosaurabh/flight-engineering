import { FAQ } from 'components/faq';
import { ProductsList } from 'components/list';
import { Newsletter } from 'components/newsletter';
import { Button } from 'components/ui/button';

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

          <Button variant="link" className="mt-2 px-0 text-blue-800">
            HOW?
          </Button>
        </div>

        <ProductsList />
        <FAQ className="mt-12" />
        <Newsletter />
      </div>
    </>
  );
}
