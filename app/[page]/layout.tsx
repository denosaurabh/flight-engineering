import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="mt-20">
        <Suspense>{children}</Suspense>
      </div>
    </Suspense>
  );
}
