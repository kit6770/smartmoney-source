import React from "react";
import { WalletTable } from "./wallet/table";
import wallets from './wallet/wallets.json'

type Props = {};

export const WalletList = (props: Props) => {
  return (
    <div className="bg-[#18181B]  p-4 rounded-[14px]">
      <WalletTable
        wallets={wallets.data.rank}
      />
    </div>
  );
};
