import {
  type ChangeEventHandler,
  type FormEventHandler,
  useState,
} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const toUrl = (query: string, searchParams: URLSearchParams) => {
  const newSearchParams = new URLSearchParams(searchParams);
  newSearchParams.set('query', query);
  return `/search?${newSearchParams.toString()}` as const;
};

export const useSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  const triggerSearch = useDebouncedCallback((phrase: string) => {
    if (phrase) {
      const url = toUrl(phrase, searchParams);
      searchParams.has('query') ? router.replace(url) : router.push(url);
    }
  }, 500);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    triggerSearch(query);
    triggerSearch.flush();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newQuery = event.target.value;

    setQuery(newQuery);
    triggerSearch(newQuery);
  };

  return { handleChange, handleSubmit, query };
};
