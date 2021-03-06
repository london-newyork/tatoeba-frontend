import Head from 'next/head'
import { useRouter } from 'next/router'
import {useState,useEffect} from 'react'
import { Header } from '../src/components/Header/Header'
import { LoginLayouts } from '../src/components/Layouts/LoginLayouts'

const CompleteRegisterMember = () => {
  const [confirmRegistrations, setConfirmRegistrations] = useState([])
  const [password, setPassWord] = useState<string | undefined>()
  const [token, setToken] = useState<string | undefined | string[]>()
  const router = useRouter()

//バックエンドからきたレスポンスをもとにtokenを抽出
  useEffect(() => {
    const fetchRegistrationsComplete = async() => {

      //バックエンドのURLをかいてバックエンドからtokenを抽出
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`)
      const data = await response.json()

      setConfirmRegistrations(data.registrations)
      //ユーザーがアクセスしたURLからトークンを抽出（バックエンド側でのPOSTのレスポンスの中のregistrationsTokenを、フロントで下記のように抽出することもできる）
      //const registrationsToken = data.registrationToken
      const newToken = router.query.token
      console.log(newToken);
      setToken(newToken)
    }
    fetchRegistrationsComplete()
  },[])

  const handleChangePassword = (e) => {
    setPassWord(e.target.value)
  }
  console.log(password);//確認済み

  //Backend側へパスワードとトークンを送る
  const handleSendPassword = async() => {

    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/registrations",
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, token })
    }
    )
    // await router.push(`/DashBoard/${users}`)
  }

  return (
    <div>
         <Head>
        <title>新規会員登録</title>
        <link rel='favicon.ico' />
      </Head>
      <Header />
      <LoginLayouts>
        <section className="
            h-screen
            px-2
            md:px-0
            mx-auto
            flex
            justify-center
            ">
                <div className="
                bg-white
                px-7
                pt-20
                pb-7
                rounded-3xl
                border-[1px]
                border-gray-800
                min-w-[24rem]
                md:w-[24rem]
                h-[31.25rem]
                flex
                flex-col
                items-center
                ">
                  <h1 className="
                  text-2xl
                  text-gray-500
                  select-none
                  font-normal
                  "
                  >
                    新規会員登録完了手続き
                  </h1>
                  <p className='pt-10 text-gray-400'>パスワードを入力してください</p>
                  <div className='pt-14 flex flex-col gap-6'>
                    <div className='flex flex-col'>
                      <p
                      className='
                      pr-2
                      font-normal
                      text-gray-600
                      w-[128px]
                      text-sm
                      pb-2
                      '>
                        パスワード
                      </p>
                      <input
                      value={password}
                      className='
                      outline-none
                      focus:ring-2
                      focus:ring-offset-3
                      focus:ring-green-100
                      focus:ring-offset-green-50
                      focus:border-green-100
                      focus:placeholder-gray-300
                      h-8
                      py-2
                      px-3
                      w-[300px]
                      border
                      border-gray-200
                      rounded-full
                      '
                      onChange={handleChangePassword}
                      />
                    </div>
                    <button
                    className='
                    mt-4
                    mb-4
                    mx-auto
                    p-3
                    w-full
                    rounded-full
                    bg-dark_green
                    text-gray-800
                    text-lg
                    hover:bg-opacity-90
                    '
                    onClick={handleSendPassword}
                    >登録を完了する</button>
                  </div>
                </div>
        </section>
      </LoginLayouts>
    </div>
  )
}

export default CompleteRegisterMember