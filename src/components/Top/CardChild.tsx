import { ParsedUrlQuery } from 'querystring'
import React, { VFC } from 'react'
import { useRecoilState } from 'recoil'
import { CardProps, Words } from '../types/types'
import { WordsAtom } from '../utils/atoms/WordsAtom'

// export const CardChild:VFC<CardProps>= (props) => {
export const CardChild:VFC = (props) => {
    const [words, setWords] = useRecoilState<Words[] | ParsedUrlQuery[]>(WordsAtom)
// const {words, handleMoveToResult} = props
  return (
    <>
        {words
        ? words.map((item:Words) => (
                    <li
                    key={item.tId}
                    className='
                    px-6
                    pt-6
                    pb-6
                    h-[336px]
                    w-[280px]
                    rounded-md
                    drop-shadow-2xl
                    bg-white
                    '
                    >
                        <ul
                        className='
                        h-[72px]
                        pl-1
                        '>
                            <li className='text-gray-300 text-xs'>{item.tId}</li>
                            <li>
                                <h3 className='
                                text-left
                                text-dark_green
                                text-lg
                                '>
                                    {item.title}
                                    <br />
                                    <span className='text-gray-500'>
                                        を例えると...
                                    </span>
                                    {item.shortParaphrase}
                                </h3>
                            </li>
                        </ul>
                        <ul className='
                        pt-5
                        '>
                            <li className='
                            flex
                            flex-col
                            items-center'>
                                <img src="" alt="" className='w-56 h-36'/>
                            </li>
                            <li
                            className='
                            flex
                            justify-end
                            gap-x-2
                            '>
                                <button
                                className='
                                bg-gray-200
                                text-gray-500
                                text-sm
                                rounded-md
                                my-4
                                p-2
                                py-1
                                px-2
                                '
                                // onClick={() => handleMoveToEdit(
                                //     item.tId,
                                //     item.title,
                                //     item.shortParaphrase,
                                //     item.description,
                                // )}
                                >
                                編集
                                </button>
                                <button
                                className='
                                my-4
                                p-2
                                text-sm
                                bg-light_green
                                text-q_dark_green
                                rounded
                                '
                                // onClick={() => handleMoveToResult(
                                //     item.tId,
                                //     item.title,
                                //     item.shortParaphrase,
                                //     item.description,
                                // )}
                                >
                                    詳細
                                </button>
                            </li>
                        </ul>
                    </li>
                )
            ): undefined }


    </>
  )
}
