import React from 'react'

type Props = {
    className?: string
}

export const Divider = ({className}: Props) => {
  return (
    <div className={`border-[#ffffff26] border-t-[1px] ${className}`}/>
  )
}