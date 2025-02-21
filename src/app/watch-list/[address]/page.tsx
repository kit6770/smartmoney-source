import { Header } from '@/app/header'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='flex flex-col w-full items-center'>
        <Header />
        <div className='flex flex-col self-center w-[960px]'>
            123
        </div>
    </div>
  )
}

export default Page