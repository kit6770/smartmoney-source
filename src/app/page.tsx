'use client'

import classNames from 'classnames'
import GlobalContextProvider from './app-context'
import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'
import useSWR from 'swr'
import { Header } from './header'
import { Filter } from './filter'
import { createTheme, Grid2 as Grid, ThemeProvider } from '@mui/material'
import { TreeMapChart } from './chart'
import { WalletList } from './wallet-list'
import { PNLProfileCell } from './wallet/table'
import { TopRank } from './wallet/top-rank'
import { TokenDrawer } from './token/drawer'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export default function Home() {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={darkTheme}>
        <main className='h-screen bg-black text-white'>
          <Header />
          <div className='flex flex-row gap-[10px] px-[10px]'>
            <div className="w-[260px] bg-[#18181B] text-white p-4 rounded-[14px]" style={{
                  height: 'calc(-96px + 100vh)',
                  overflow: 'hidden auto',
                  overflowAnchor: 'none',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
            }}>
              <Filter />
            </div>
            <div className="w-[952px] text-white flex flex-col gap-[10px]" style={{
                  height: 'calc(-96px + 100vh)',
                  overflow: 'hidden auto',
                  overflowAnchor: 'none',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
            }}>
              <TreeMapChart />
              <WalletList />
            </div>
            <div className="w-[320px] bg-[#18181B] text-white rounded-[14px]" style={{
                  height: 'calc(-96px + 100vh)',
                  overflow: 'hidden auto',
                  overflowAnchor: 'none',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
            }}>
              <TopRank />
            </div>
          </div>
          <TokenDrawer />
        </main>
      </ThemeProvider>
    </GlobalContextProvider>
  );
}

