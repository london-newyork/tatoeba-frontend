import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Dispatch, useState } from 'react';
import { Header } from '../src/components/Header/Header';
import { LoginLayouts } from '../src/components/Layouts/LoginLayouts'

export default function Login() {
  const router = useRouter()


  const [data, setData] = useState<string>()

const handleRegisterMember = () => {
  router.push({
    pathname:'/DashBoard/'
  }
  )
}

const registrationToken = ''
const res = fetch(process.env.REACT_APP_BACKEND_URL + "/registrations")
      .then(response => response.json())
      .then(json =>  setData(registrationToken));

  return (
    <>
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
                  text-3xl
                  text-gray-500
                  select-none
                  font-normal
                  "
                  >
                      新規会員登録
                  </h1>
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
                        メールアドレス
                      </p>
                      <input
                      value={data}
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
                      />
                    </div>
                    <div className='flex flex-col'>
                      <p
                      className='
                      pr-2
                      text-gray-600
                      w-[128px]
                      text-sm
                      pb-2
                      '>パスワード</p>
                        <input
                        className='
                        shadow-sm
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
                    onClick={handleRegisterMember}
                    >新規会員登録</button>
                  </div>
                </div>
        </section>
      </LoginLayouts>
    </>
  )
};
