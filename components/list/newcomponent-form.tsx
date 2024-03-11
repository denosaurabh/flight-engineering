'use client';

import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import { cn } from 'lib/utils';
import { useFormState, useFormStatus } from 'react-dom';
import { createNewModuleReq } from './action';

const initialState = {
  message: ''
};

export const NewComponentForm = () => {
  const [state, formAction] = useFormState(createNewModuleReq, initialState);

  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center gap-2 rounded-md bg-background p-3 shadow-sm'
      )}
    >
      <p className="mb-3 text-xl font-medium">Want another module?</p>

      <form action={formAction} className="flex w-full max-w-xs flex-col justify-center gap-2">
        <Input
          required
          name="module"
          className="w-full"
          placeholder="type of module or name"
          type="text"
        />

        <SubmitButton />

        <p
          aria-live="polite"
          className="text-center text-sm font-bold text-foreground"
          role="status"
        >
          {state?.message}
        </p>
      </form>
    </div>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="sm" className="w-full" aria-disabled={pending} disabled={pending}>
      Send
    </Button>
  );
}
