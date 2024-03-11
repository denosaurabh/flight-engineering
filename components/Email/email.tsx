'use client';

import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import { useFormState, useFormStatus } from 'react-dom';
import { addNewsletterEmail } from './action';

const initialState = {
  message: ''
};

export const Newsletter = () => {
  const [state, formAction] = useFormState(addNewsletterEmail, initialState);

  return (
    <div className="flex w-full flex-col items-center gap-2 space-y-2 rounded-lg border border-border bg-background/50 px-4 py-6 shadow-sm">
      <p className="text text-foreground/80">
        Be the first to know when we add new components and get 10% discount on your first order.
      </p>

      <form action={formAction} className="flex w-full flex-col justify-center gap-2 sm:flex-row">
        <Input
          name="email"
          required
          className="w-full sm:w-[300px]"
          placeholder="Enter your email"
          type="email"
        />

        <SubmitButton />
      </form>
      <p aria-live="polite" className="text-center text-sm font-bold text-foreground" role="status">
        {state?.message}
      </p>
    </div>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="sm" aria-disabled={pending} disabled={pending}>
      Subscribe
    </Button>
  );
}
