import { Newsletter } from 'components/Email/email';
import { ActionButton } from 'components/action-button';
import { FAQ } from 'components/faq';
import { ProductsList } from 'components/list';

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
          <p className="text-foreground/80">
            {/* when makers need modules for their project in india, they have to either order <br />
            - outdated modules domestically, often with lacking documentation.
            <br />- internationally with high shipping and custom charges. */}
            When makers buy modules in India, they have to either: <br /> <br />
            - order outdated modules domestically, often with lacking documentation, or
            <br />- order internationally with high shipping and custom charges.
            <br />
            <br />
            We solve this problem by designing & assembling modules in India, <br />
            which significantly cuts a modules&apos;s cost and bring latest hardware.
            <br />
            <br />
          </p>
          <ActionButton />
        </div>

        <ProductsList />
        <FAQ className="mt-12" />
        <Newsletter />
      </div>
    </>
  );
}
