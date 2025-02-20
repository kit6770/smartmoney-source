import { formatNumberWithBrackets } from "./formatNumberWithBrackets"

export function formatAmount(
    amount: number,
    decimal: number = 2,
    prefix?: string,
    subfix?: string,
  ): React.ReactNode {
    if (!amount) {
      return <div>{Number(0).toFixed(decimal)}</div>
    }
    if (amount >= 1000000000000) {
      return (
        <div>
          {prefix}
          {(amount / 1000000000000).toFixed(decimal)}T{subfix && ` ${subfix}`}
        </div>
      )
    } else if (amount >= 1000000000) {
      return (
        <div>
          {prefix}
          {(amount / 1000000000).toFixed(decimal)}B{subfix && ` ${subfix}`}
        </div>
      )
    } else if (amount >= 1000000) {
      return (
        <div>
          {prefix}
          {(amount / 1000000).toFixed(decimal)}M{subfix && ` ${subfix}`}
        </div>
      )
    } else if (amount >= 1000) {
      return (
        <div>
          {prefix}
          {(amount / 1000).toFixed(decimal)}K{subfix && ` ${subfix}`}
        </div>
      )
    } else {
      return (
        <div>
          {prefix}
          {formatNumberWithBrackets(+amount)}
          {subfix && ` ${subfix}`}
        </div>
      )
    }
  }


  export const formatAddress = (address: string, before = 5, after = 3) => {
    if (address) {
      const start = address.substring(0, before)
      const end = address.substring(address.length - after, address.length)
      if (address.length < 10) {
        return address
      }
      return `${start}...${end}`
    }
    return address
  }