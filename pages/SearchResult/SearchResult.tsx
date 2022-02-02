import React from 'react';

export default function SearchResult () {
  return (
  <section
    className="
    flex
    flex-col
    justify-around
    w-full">
        <h1>検索結果</h1>
        <h2>サーバーをわかりやすく例えると...</h2>
        <ul>
            <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <a>土地</a>
            </li>
        </ul>
    </section>
    )
  }