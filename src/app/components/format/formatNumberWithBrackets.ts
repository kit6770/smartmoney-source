/**
 *
 *
 * 格式化数字，将数字转换为字符串，并使用 [n] 表示前导零的数量。
 * @param num - 要格式化的数字。
 * @param maxLength - 输出字符串的最大长度。
 * @param prefix - 前缀字符，默认为 '['。
 * @param suffix - 后缀字符，默认为 ']'。
 * @returns 格式化后的字符串。
 *
 * const num1 = 0.00000000123;
 * const num2 = 0.1230213123;
 * const num3 = 1.222321312;
 * const num4 = 1.0000000123123;
 * const num5 = 1234567890.123456789;
 * const num6 = 1.2321;
 * console.log(formatNumberWithBrackets(num1)); // 输出: 0.0[8]123
 * console.log(formatNumberWithBrackets(num2)); // 输出: 0.1230
 * console.log(formatNumberWithBrackets(num3)); // 输出: 1.2223
 * console.log(formatNumberWithBrackets(num4)); // 输出: 1.0[6]123
 * console.log(formatNumberWithBrackets(num5)); // 输出: 12345678
 * console.log(formatNumberWithBrackets(num5, 10)); // 输出: 1234567890
 * console.log(formatNumberWithBrackets(num6)); // 输出: 1.2321
 *
 */

import Decimal from 'decimal.js'

const defaultOpts = {
  decimal: 9,
  prefix: '',
  suffix: '',
}
export function formatNumberWithBrackets(
  num: number,
  opts?: {
    decimal?: number
    maxLength?: number
    prefix?: string
    suffix?: string
  },
): string {
  if (!num) return '0.00'
  const {
    maxLength,
    decimal = 9,
    prefix = '[',
    suffix = ']',
  } = {...defaultOpts, ...opts}
  const numStr = new Decimal(num).toFixed()
  const parts = numStr.split('.')

  //   const integerPart = parts[0]
  const decimalPart = parts[1]

  if (num >= 1) {
    // 如果数字大于等于1，检查小数部分是否有前导零
    if (parts.length === 2) {
      const firstNonZeroIndex = decimalPart.search(/[1-9]/)

      if (firstNonZeroIndex > 2) {
        // 有前导零，使用 [n] 表示前导零的数量
        const zeroCount = firstNonZeroIndex
        const nonZeroPart = decimalPart.slice(
          firstNonZeroIndex,
          firstNonZeroIndex + firstNonZeroIndex,
        )
        const formattedString = `1.0${prefix}${getZeroCount(
          zeroCount,
        )}${suffix}${nonZeroPart}`

        // 确保字符串长度不超过 maxLength
        // if (formattedString.length > maxLength) {
        //   return formattedString.slice(0, maxLength) // 如果超过 maxLength，截取前 maxLength 位
        // } else {
        //   return formattedString // 不填充到 maxLength
        // }
        if (maxLength) {
          return formattedString.slice(0, maxLength)
        }
        return formattedString
      } else {
        return numStr.slice(0, decimal)
      }
    }

    // 没有小数部分，直接返回原始字符串并确保精度为4位
    return numStr.slice(0, decimal) // 不填充到 maxLength
  }

  if (parts.length !== 2) {
    return numStr.slice(0, decimal) // 如果不是小数，截取到 maxLength
  }

  // 找到第一个非零字符的位置
  const firstNonZeroIndex = decimalPart.search(/[1-9]/)

  if (firstNonZeroIndex === -1) {
    return numStr.slice(0, decimal) // 如果没有非零字符，截取到 maxLength
  }

  // 如果没有前导零，直接返回原始的小数部分
  if (firstNonZeroIndex < 3) {
    const formattedString = `0.${decimalPart}`
    return formattedString.slice(0, decimal) // 不填充到 maxLength
  }

  // 计算零的数量
  const zeroCount = firstNonZeroIndex

  // 构建新的字符串
  const nonZeroPart = decimalPart.slice(
    firstNonZeroIndex,
    firstNonZeroIndex + firstNonZeroIndex,
  )
  const formattedString = `0.0${prefix}${getZeroCount(
    zeroCount,
  )}${suffix}${nonZeroPart}`

  if (maxLength) {
    return formattedString.slice(0, maxLength)
  }
  return formattedString
}

const getZeroCount = (value: number) => {
  return Number(value)
    .toString()
    .split('')
    .reduce((pre, cur) => {
      pre += String.fromCharCode(8320 + Number(cur))
      return pre
    }, '')
}
