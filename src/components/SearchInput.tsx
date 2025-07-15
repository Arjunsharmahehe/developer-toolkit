"use client";

import { Search } from 'lucide-react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function SearchInput() {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {

    const params = new URLSearchParams(searchParams);

 
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className='flex items-center border-2 border-neutral-300 rounded-md hover:border-neutral-400'>
        <Search className='size-5 ml-2 text-neutral-500'/>
        <input
        type="text"
        placeholder="Search.."
        className="max-w-36 w-full px-2 py-1 text-sm focus:outline-none"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
        />
    </div>
  );
}