import Link from 'next/link'
import React, { VFC } from 'react'
import type { User } from "../../../pages/DashBoard/index"
import { TatoeList } from "../DashBoard/TatoeList"
import { Layouts } from '../types/types'

export const TatoeListWrapper:VFC<Layouts> = (props) => {
    return (
    <div>
         <div className='flex flex-row pt-6 gap-3 pb-6 border-b border-gray-200'>
            <Link
                href="/Register"
                >
                <button
                type='button'
                className='w-6 h-6
                bg-mint_green rounded-full'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-q_dark_green m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
                </Link>
                <p className='text-white'>新規投稿</p>
        </div>
        <div className='pt-8'>
            <h2
            className='
            text-md
            text-white
            '
            >
                [投稿一覧]
            </h2>
        </div>
        {props.children}
    </div>
  )
}