'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import { addItem } from 'components/cart/actions';
import LoadingDots from 'components/loading-dots';
import { Button } from 'components/ui/button';
import { ProductVariant } from 'lib/shopify/types';
import { useSearchParams } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton({
  availableForSale,
  selectedVariantId
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  const { pending } = useFormStatus();
  // const buttonClasses =
  //   'relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white';
  // const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  if (!availableForSale) {
    return (
      <Button size="lg" className="uppercase" aria-disabled disabled>
        Out Of Stock
      </Button>
    );
  }

  if (!selectedVariantId) {
    return (
      <Button
        size="lg"
        className="uppercase"
        aria-label="Please select an option"
        aria-disabled
        disabled
        // className={clsx(buttonClasses, disabledClasses)}
      >
        <div className="absolute left-0 ml-4">
          <PlusIcon className="h-5" />
        </div>
        Preorder
      </Button>
    );
  }

  return (
    <Button
      size="lg"
      className="uppercase"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label="Add to cart"
      aria-disabled={pending}
      disabled={pending}
    >
      {/* <div className="absolute left-0 ml-4"> */}
      {pending ? <LoadingDots className="bg-background/80" /> : <PlusIcon className="h-5" />}
      {/* </div> */}
      Preorder
    </Button>
  );
}

export function AddToCart({
  variants,
  availableForSale
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
}) {
  const [message, formAction] = useFormState(addItem, null);
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);

  return (
    <form action={actionWithVariant}>
      <SubmitButton availableForSale={availableForSale} selectedVariantId={selectedVariantId} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
