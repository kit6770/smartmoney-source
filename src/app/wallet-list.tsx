import React from "react";
import { WalletTable } from "./wallet/table";
import wallets from './wallet/wallets.json'
import useSWR from "swr";

type Props = {};

export const WalletList = (props: Props) => {
  const {data} = useSWR('api:/smartmoney/dex-api/v1/data/wallet_rank')
  console.log(data)
  return (
    <div className="bg-[#18181B]  p-4 rounded-[14px]">
      <WalletTable
        wallets={data}
      />
    </div>
  );
};
