import React from "react";
import { WalletTable } from "./wallet/table";

type Props = {};

export const WalletList = (props: Props) => {
  return (
    <div className="bg-[#18181B]  p-4 rounded-[14px]">
      <WalletTable
        wallets={[
            { address: "1" },
            { address: "2" },
            { address: "3" },
            { address: "4" },
            { address: "5" },
            { address: "6" },
            { address: "7" },
            { address: "8" },
            { address: "9" },
        ]}
      />
    </div>
  );
};
