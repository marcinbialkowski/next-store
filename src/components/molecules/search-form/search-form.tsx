'use client';

import { Search } from 'lucide-react';
import { useSearch } from './use-search';
import { Input } from '@/components/atoms/input';

interface SearchFormProps {
  className?: string;
}

export const SearchForm = ({ className }: SearchFormProps) => {
  const { handleChange, handleSubmit, query } = useSearch();

  return (
    <search className={className}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="products-global-search" className="sr-only">
          Search products
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-300" />
          </div>
          <Input
            autoComplete="off"
            className="w-full pl-11"
            id="products-global-search"
            onChange={handleChange}
            placeholder="Search"
            type="search"
            value={query}
          />
        </div>
      </form>
    </search>
  );
};
