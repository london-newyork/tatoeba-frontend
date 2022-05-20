import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css";
import { Header } from '../../../src/components/Header/Header';
import { SearchMainLayouts } from '../../../src/components/Layouts/SearchMainLayouts'

const SearchResult = () => {

  const router = useRouter()
  const { tId, title, shortParaphrase, description } = router.query

  return (
      <>
      <Head>
        <title>Tatoeba 例え話詳細</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
       <SearchMainLayouts>
          <div>
            <div
            className='flex flex-col'
            >
               <div
               className='
               flex
               relative
               '
               >
                  <h1 className="
                  text-4xl
                  text-gray-700
                  pt-6
                  ">
                    {title}
                    をわかりやすく例えると...
                  </h1>
               </div>
            </div>
            <h2 className="pt-16 text-2xl text-gray-600">
              {shortParaphrase}
            </h2>
            <p className="
            py-12
            text-md
            leading-loose
            text-gray-600">
              {description}
            </p>
            <div className='max-w-[600px] h-96 bg-gray-300 mx-auto mb-32'>
              <img />
              </div>
          </div>
        </SearchMainLayouts>
      </>
  )
};

export default SearchResult
