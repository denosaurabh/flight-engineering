'use client';

import { Button } from './ui/button';

export const HowButton = () => {
  return (
    <Button
      variant="link"
      className="mt-2 px-0 text-blue-800"
      onClick={() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }}
    >
      HOW?
    </Button>
  );
};
