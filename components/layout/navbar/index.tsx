import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import LogoSquare from 'components/logo-square';
import Link from 'next/link';
import { Suspense } from 'react';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  // const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav className="relative flex items-center justify-between">
      {/* <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div> */}

      <div className="flex w-full flex-col justify-between md:flex-row">
        <div className="flex flex-col items-start justify-start gap-4">
          <Link href="/" className="mr-2 flex w-full items-center gap-3">
            <LogoSquare size="xl" />
            <div className="w-min flex-none text-2xl font-semibold uppercase">{SITE_NAME}</div>
          </Link>

          <p className="text text-foreground/80">
            Place for latest & affordable modules for makers in India
          </p>
        </div>

        <div className="flex justify-end">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
