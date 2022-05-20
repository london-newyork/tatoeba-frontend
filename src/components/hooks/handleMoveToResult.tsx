import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { Words } from '../types/types'
import { WordsAtom } from '../utils/atoms/WordsAtom'

export const useHandleMoveToResult= () => {

    const [words, setWords] = useRecoilState<Words[]>(WordsAtom)
    const router = useRouter()

    const handleMoveToResult = (props:Words) => {
        const { tId, title, shortParaphrase, description  } = props

            words.forEach((item:Words) => {
                if(item.tId === tId) {

                router.push({
                    pathname:'/SearchResult/[tId]/',
                    query: {
                        tId,
                        title,
                        shortParaphrase,
                        description,
                    }
                })
            } return item
        }
        )

    }
    return { handleMoveToResult }
}