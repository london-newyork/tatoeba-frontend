import { useRouter } from 'next/router'
import React, { VFC } from 'react'
import { useRecoilState } from 'recoil'
import { useHandleMoveToResult } from '../hooks/handleMoveToResult'
import { Words } from '../types/types'
import { WordsAtom } from '../utils/atoms/WordsAtom'

export const CardChild:VFC = () => {
    const [words, setWords] = useRecoilState<Words[]>(WordsAtom)
    const router = useRouter()

    const RandomColors =[
        "hover:shadow-plane_2xl_card_prime",
        "hover:shadow-plane_2xl_card_second",
        "hover:shadow-plane_2xl_card_third",
        "hover:shadow-plane_2xl_card"
     ]

    const colors = RandomColors[Math.floor(Math.random()*RandomColors.length)]
    const shadowColor = colors.toString()

    const { handleMoveToResult } = useHandleMoveToResult()

  return (
    <>
        {words
        ? words.map((item:Words) => (
                    <li
                    key={item.tId}
                    className={`
                    px-6
                    pt-8
                    pb-2
                    h-[312px]
                    w-[280px]
                    rounded-2xl
                    shadow-plane_2xl_card
                    ${shadowColor}
                    border-[1px]
                    border-gray-800
                    bg-white
                    `}
                    onClick={() => handleMoveToResult({
                        tId: item.tId,
                        title: item.title,
                        shortParaphrase: item.shortParaphrase,
                        description: item.description,}
                    )}
                    >
                        <ul
                        className='
                        h-[72px]
                        pl-1
                        '>
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
                        </ul>
                    </li>
                )
            ): undefined }


    </>
  )
}
