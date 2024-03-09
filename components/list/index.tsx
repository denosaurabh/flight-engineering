import Price from 'components/price';
import { getCollectionProducts } from 'lib/shopify';
import { Product } from 'lib/shopify/types';
import { cn } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export async function ProductsList() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <section className="grid auto-rows-[400px] grid-rows-[400px] gap-2 sm:grid-cols-2">
          {homepageItems.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </section>
      </div>
    </div>
  );
}

const ProductCard = ({ product: item }: { product: Product }) => {
  // const subtitle = item.metafields.find((m) => m.key === 'subtitle')?.value;

  return (
    <Link
      className={cn(
        'relative flex flex-col gap-2 rounded-md bg-background p-3 shadow-sm',
        'transition-all hover:-translate-y-1 hover:shadow-md active:translate-y-0.5'
      )}
      href={`/product/${item.handle}`}
    >
      <div className="relative aspect-square h-full w-full">
        <Image
          src={item.featuredImage.url}
          alt={item.title}
          className="rounded-lg object-cover"
          sizes="500px"
          fill
        />
      </div>

      <div>
        <div className="mt-auto">
          <h3 className="text-lg font-medium text-foreground/80">{item.title}</h3>
          {/* <p className="text-sm text-foreground/60">{subtitle}</p> */}
        </div>

        <div className="flex items-end">
          <Price
            amount={item.priceRange.maxVariantPrice.amount}
            currencyCode={item.priceRange.maxVariantPrice.currencyCode}
            currencyCodeClassName="hidden"
          />
        </div>
      </div>
    </Link>
  );
};
