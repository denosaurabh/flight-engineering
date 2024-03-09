import { convertSchemaToHtml } from '@thebeyondgroup/shopify-rich-text-renderer';

import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';

export const ProductSpecifications = ({ product }: { product: Product }) => {
  const specifications = product.metafields.find((m) => m?.key === 'specifications')?.value || '';
  const productIncludes =
    product.metafields.find((m) => m?.key === 'product_includes')?.value || '';

  return (
    <div className="mt-28 flex h-fit w-full flex-col justify-between rounded-lg bg-background p-10 shadow-lg sm:flex-row">
      <div className="flex flex-col">
        <p className="text-2xl font-bold text-foreground/90">Specifications</p>
        <Prose
          className="text my-4 w-fit text-left leading-tight text-foreground/80"
          html={convertSchemaToHtml(specifications)}
        />
      </div>

      <div className="flex flex-col">
        <p className="text-2xl font-bold text-foreground/90">Product Includes</p>
        <Prose
          className="text my-4 leading-tight text-foreground/80"
          html={convertSchemaToHtml(productIncludes)}
        />
      </div>
    </div>
  );
};
