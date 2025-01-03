import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';

export function ProductDescription({ product }: { product: Product }) {
  const subtitle = product.metafields.find((m) => m.key === 'subtitle')?.value;

  return (
    <>
      <div className="flex h-[450px] flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-medium">{product.title}</h1>
          <p className="text mb-2 text-foreground/80">{subtitle}</p>
        </div>

        {/* <VariantSelector options={product.options} variants={product.variants} /> */}

        {product.descriptionHtml ? (
          <Prose
            className="text my-4 leading-tight text-foreground/80"
            html={product.descriptionHtml}
          />
        ) : null}

        <div className="my-4 mt-auto flex flex-col">
          <div className="flex items-center gap-2">
            <Price
              className="text-xl font-medium text-foreground/80"
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />

            <div className="mr-auto w-auto text-sm font-bold text-blue-600 underline decoration-wavy underline-offset-4">
              25% off on preorder
            </div>
          </div>

          <Price
            className="text font-medium text-foreground/50 line-through"
            amount={product.compareAtPriceRange.maxVariantPrice.amount}
            currencyCode={product.compareAtPriceRange.maxVariantPrice.currencyCode}
          />
        </div>

        <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="text mt-2 font-medium text-foreground/50">- Shipping in India only</p>

        <div className="flex items-center gap-2 ">
          <p className="text mt-2 font-medium text-foreground/50">
            - Ships 3rd to 4th week of April.
            {/* WHY? */}
          </p>

          {/* <Button variant="outline" size="icon" className="p-">
            <InformationCircleIcon className="h-4 w-4" />
          </Button> */}
        </div>
      </div>
    </>
  );
}
