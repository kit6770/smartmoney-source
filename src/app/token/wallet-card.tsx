import React from 'react'
import dayjs from 'dayjs'
import { CopyButton } from '../components/copy-button'
import { formatAddress } from '../components/format'
import { Divider } from '../components/divider'
import { SvgThunderboltFill, SvgWhale } from '@/assets/svg'
import GradientAreaChart from './GradientAreaChart'

type Wallet ={
    address: string
}

type Props = {
    wallet: Wallet
}

export const WalletCard = ({wallet}: Props) => {

  return (
    <div className='flex flex-col bg-[#212325] p-4 rounded-[12px]'>
        <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-col'>
                <CopyButton textToCopy={wallet?.address}>
                    <div className='text-[16px] text-white'>{formatAddress(wallet?.address)}</div>
                </CopyButton>
                <div className='text-[12px] text-[#A1A1A1]'>0.067</div>
            </div>
            <div className='flex flex-col'>
                <div className='text-[#2DC24E] text-[22px]'>+2,3492.66</div>
                <div className='text-[#8D8D8D] text-[12px] flex flex-row justify-end'>Total Profit</div>
            </div>
        </div>
        <div className='flex flex-row flex-wrap items-center gap-2'>
            <div className='flex flex-row items-center gap-1 p-1 bg-[#8979FF26] rounded-[6px]'>
                <SvgWhale />
                <div className='text-[12px]'>Whale</div>
            </div>
            <div className='flex flex-row items-center gap-1 p-1 bg-[#8979FF26] rounded-[6px]'>
                <SvgThunderboltFill />
                <div className='text-[12px]'>High-Frequency Trading</div>
            </div>
        </div>
        <Divider className='my-[10px]' />
        <div className='flex flex-row items-center text-[12px] text-[#8D8D8D]'>
            首次买入：{dayjs().format('MM/DD HH:mm:ss')}
        </div>
        <div className='flex flex-row items-center justify-between mt-[10px]'>
            <div className='flex flex-col w-33'>
                <div className='text-[14px]'>$9,7737.77</div>
                <div className='text-[#8D8D8D] text-[12px]'>Buy</div>
            </div>
            <div className='flex flex-col w-33'>
                <div className='text-[14px]'>9%</div>
                <div className='text-[#8D8D8D] text-[12px]'>Position</div>
            </div>
            <div className='flex flex-col w-33'>
                <div className='text-[14px]'>$3.1M</div>
                <div className='text-[#8D8D8D] text-[12px]'>MC</div>
            </div>
        </div>
    </div>
  )
}