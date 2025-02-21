import { Avatar } from "@mui/material";
import React from "react";
import { Token } from "./drawer";

type Props = {
  size?: number;
  token?: Token;
};

const chainMap = new Map([
  [
    "sol",
    {
      logo: "/smartmoney/solana.svg",
    },
  ],
]);

export const TokenAvatar = ({ token, size = 44 }: Props) => {
  const chain = React.useMemo(() => {
    if (token?.chain) {
      const _chain = chainMap.get(token.chain);
      return _chain;
    }
  }, [token?.chain]);
  return (
    <div className="relative">
      <Avatar
        src={token?.logo}
        alt="logo"
        style={{ width: size, height: size }}
      />
      {chain && (
        <Avatar
          src={chain.logo}
          alt="chainLogo"
          style={{
            position: "absolute",
            width: 12,
            height: 12,
            right: 0,
            bottom: 0,
          }}
        />
      )}
    </div>
  );
};
