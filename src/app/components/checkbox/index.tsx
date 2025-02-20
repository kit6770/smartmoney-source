import { Checkbox } from '@mui/material'
import React from 'react'

type Props = {
    label?: string
}

const CheckBox = ({label}: Props) => {
  return (
    <div>
        <div>{label}</div>
        <Checkbox />
    </div>
  )
}