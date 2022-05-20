import React from 'react';
import Head from 'next/head'
import "tailwindcss/tailwind.css";
import { Header } from '../../src/components/Header/Header';
import Link from 'next/link';
import { SearchMainLayouts } from '../../src/components/Layouts/SearchMainLayouts';

const SearchResultList = () => {
    console.log("result clicked!");
  return (
      <>
      <Head>
        <title>Tatoeba 例え話 検索結果一覧</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <SearchMainLayouts>
            <div className='flex flex-col'>
                <small className="text-gray-500">検索結果一覧</small>
                <h1 className="text-4xl pt-6 scss-underline">サーバーをわかりやすく例えると...</h1>
            </div>
            <ul className="pt-12">
                <li>
                    <Link href="/SearchResult/[tId]">
                        {/*  as={`/SearchResult/${router.query.id}`} */}
                    <a className="flex
                        flex-row
                        items-centers
                        gap-2
                        hover:opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                        土地
                    </a>
                    </Link>
                </li>
            </ul>
        </SearchMainLayouts>
      </>
  )
};
export default SearchResultList