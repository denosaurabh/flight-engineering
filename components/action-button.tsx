'use client';

import Link from 'next/link';
import { Button } from './ui/button';

export const ActionButton = () => {
  return (
    <Button asChild variant="link" className="px-0 underline">
      <Link href="/about">About Us.</Link>
    </Button>
  );
};
