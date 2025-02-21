import React from 'react'

type Props = {
  value: number
  showIcon?: boolean
  showRate?: boolean
  prefix?: string
  decimal?: number
  algin?: string
  showNumber?: boolean
  className?: string
  format?: (value: number) => React.ReactNode
}

export const parseValue = (
  value: number,
  showNumber = false,
  decimal: number = 2,
) => {
  if (value === undefined || value === null || isNaN(value)) {
    if (showNumber) {
      return {value: (0).toFixed(decimal), sign: '', icon: null}
    }
    return {value: '--', sign: '', icon: null}
  }
  value = +value
  if (value === 0) {
    return {
      // color: '',
      value: value?.toFixed(decimal),
      sign: '',
      icon: null,
    }
  } else if (value > 0) {
    return {
      color: '#2DC24E',
      value: '+' + value?.toFixed(decimal),
      sign: '+',
      // icon: <TriangleUp size="xs" fill="#00B953" />,
    }
  } else {
    return {
      color: '#F92C2C',
      value: value?.toFixed(decimal),
      sign: '-',
      // icon: <TriangleDown size="xs" fill="#FF543D" style={{marginTop: 2}} />,
    }
  }
}
export function Statistic({
  value,
  format,
  prefix,
  decimal = 2,
  // showIcon = false,
  algin = 'justify-start',
  showRate = true,
  showNumber,
  className
}: Props) {
  const result = parseValue(value, showNumber, decimal)
  return (
    <div className={`flex flex-row items-center gap-2 ${algin} ${className}`}>
      {/* {showIcon && result.icon} */}
      <div
        className='flex flex-row items-center'
        style={result.color ? {color: result.color} : {}}>
        {format ? (
          <div className='flex flex-row items-center'>
            {result.sign}
            {prefix ? prefix : ''}
            {format(Math.abs(value))}
          </div>
        ) : (
          <div className='flex flex-row items-center'>
            {result.sign}
            {prefix ? prefix : ''}
            {Math.abs(value || 0).toFixed(decimal)}
          </div>
        )}
        {showRate && '%'}
      </div>
    </div>
  )
}
