'use client'

import classNames from 'classnames'
import GlobalContextProvider from './app-context'
import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'
import useSWR from 'swr'

export default function Home() {
  return (
    <GlobalContextProvider>
      <main className='h-screen bg-black text-white'>123
      </main>
    </GlobalContextProvider>
  );
}

