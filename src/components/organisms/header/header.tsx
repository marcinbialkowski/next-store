import { Suspense } from 'react';
import { CartLink } from '@/components/atoms/cart-link';
import { SearchForm } from '@/components/molecules/search-form';
import { Navbar } from '@/components/molecules/navbar';

export const Header = () => (
  <header className="sticky top-0 bg-white py-2 shadow">
    <div className="container flex flex-1 flex-wrap items-center justify-between gap-x-6 gap-y-4">
      <Navbar />
      <div className="flex flex-1 items-center justify-end gap-6">
        <Suspense>
          <SearchForm className="min-w-56 flex-1 md:max-w-80" />
        </Suspense>
        <CartLink />
      </div>
    </div>
  </header>
);
