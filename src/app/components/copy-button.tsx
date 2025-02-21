import React from 'react'
import copy from 'copy-to-clipboard'
import { SvgCopy } from '@/assets/svg'

type Props = {
    textToCopy?: string
    children?: React.ReactNode
}

export const CopyButton = ({textToCopy, children}: Props) => {
    const handleCopy = () => {
        try {
          if(textToCopy){
              copy(textToCopy);
          }
        } catch (error) {
          console.error('copy failed:', error);
        }
      };
    
      return (
        <div className='flex flex-row items-center cursor-pointer gap-1' onClick={handleCopy}>
          {children}
          <SvgCopy />
        </div>
      );
}