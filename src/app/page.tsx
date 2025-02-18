'use client'

import classNames from 'classnames'
import GlobalContextProvider from './app-context'
import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'
import useSWR from 'swr'
import { Header } from './header'

export default function Home() {
  return (
    <GlobalContextProvider>
      <main className='h-screen bg-black text-white'>
        <Header />
        <div className='flex flex-row gap-[10px] px-[10px]'>
          <div className="w-[240px] bg-[#18181B] text-white p-4 rounded-[14px]">
          </div>
          <div className="w-[972px] bg-[#18181B] text-white p-4 rounded-[14px]"></div>
          <div className="w-[320px] bg-[#18181B] text-white p-4 rounded-[14px]"></div>
        </div>
      </main>
    </GlobalContextProvider>
  );
}

