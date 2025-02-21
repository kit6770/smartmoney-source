import { Box, Drawer, Tab, Tabs } from "@mui/material";
import { EventEmitter } from "events";
import React from "react";
import XIcon from "@mui/icons-material/X";
import LanguageIcon from "@mui/icons-material/Language";
import { useEventEmitter } from "../hooks/useEventEmitter";
import {
  SvgCircleBack,
  SvgCircleCheck,
  SvgPump,
  SvgWallet,
} from "@/assets/svg";
import { TokenAvatar } from "./avatar";
import { CopyButton } from "../components/copy-button";
import { formatAddress, formatAmount } from "../components/format";
import { WalletCard } from "./wallet-card";
import wallets from '../wallet/wallets.json'
import GradientAreaChart from "./GradientAreaChart";
import { Statistic } from "../components/statistic";
import { Divider } from "../components/divider";

type Props = {};

export type Token = {
  address: string;
  symbol: string;
  logo?: string;
  chain?: string;
};


export const TokenDrawer = (props: Props) => {
  const [walletCount, setWalletCount] = React.useState(5);
  const [isOpen, setIsOpen] = React.useState(false);
  const [token, setToken] = React.useState<Token>();
  const [tab, setTab] = React.useState(0);
  const emitter = useEventEmitter();

  React.useEffect(() => {
    const onOpen = (params: any) => {
      setIsOpen(true);
      console.log("params", params);
      if (params?.token) {
        setToken(params.token);
      }
    };
    emitter.on("openTokenDrawer", onOpen);
    return () => {
      emitter.off("openTokenDrawer", onOpen);
    };
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
      <div className="w-[484px] bg-[#18181B] h-full overflow-auto p-4">
        <div
          onClick={toggleDrawer}
          className="flex flex-row items-center gap-2 cursor-pointer">
          <SvgCircleBack />
          <div>Back</div>
        </div>
        <div className="flex flex-row items-center justify-between py-[20px] px-[10px]">
          <div className="flex flex-row items-center gap-1">
            <SvgCircleCheck />
            <div className="text-[#8D8D8D] text-[12px]">No mint</div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <SvgCircleCheck />
            <div className="text-[#8D8D8D] text-[12px]">Blacklist</div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <SvgCircleCheck />
            <div className="text-[#8D8D8D] text-[12px]">Top10 18.5%</div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <SvgCircleCheck />
            <div className="text-[#8D8D8D] text-[12px]">Burut 100% 🔥</div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <TokenAvatar token={token} />
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <div className="text-[16px] font-[700]">{token?.symbol}</div>
              <div className="flex flex-row gap-1">
                <SvgPump />
                <XIcon style={{ width: 12, height: 12, color: "#5C6068" }} />
                <LanguageIcon
                  style={{ width: 14, height: 14, color: "#5C6068" }}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <CopyButton textToCopy={token?.address}>
                <div className="text-[#8D8D8D] text-[12px]">
                  {formatAddress(token?.address || "")}
                </div>
              </CopyButton>
              <div className="flex flex-row items-center gap-1">
                <div className="text-[12px] text-[#5C6068] border-[1px] px-[2px] py-[1px] rounded-[4px]">
                  Pump Fun
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between py-2">
          <div className="flex flex-row items-center gap-1.5">
            <SvgWallet />
            <div className="text-[#C8FF00] text-[14px] border-b-[1px]">
              {walletCount} smart wallets
            </div>
          </div>
          <div className="text-[14px]">Avg Buy $3,573.64</div>
        </div>
        <div className="flex flex-row items-center border-b-[1px] gap-4 border-[#FFFFFF26]">
          <div
            data-active={tab === 0}
            onClick={() => setTab(0)}
            className="text-[#8D8D8D] text-[16px] p-3 cursor-pointer data-[active=true]:text-white border-b-[#18181B] border-b-[2px] data-[active=true]:border-b-[2px] data-[active=true]:border-b-white">
            SmartMoney
          </div>
          <div
            data-active={tab === 1}
            onClick={() => setTab(1)}
            className="text-[#8D8D8D] p-3 data-[active=true]:text-white text-[16px] cursor-pointer border-b-[#18181B] border-b-[2px] data-[active=true]:border-b-[2px] data-[active=true]:border-b-white">
            Market Data
          </div>
        </div>
        {tab === 0 && <div className="flex flex-col gap-2 py-[20px]">
            {wallets.data.rank.map(w=><WalletCard wallet={w} />)}
            </div>}
        {tab === 1 && <div className="flex flex-col gap-2 py-[20px]">
            <Statistic className="text-[36px]" value={12312312} prefix="$" showRate={false} />
            <div className="flex flex-row items-center gap-2">
                <div className="text-[#8D8D8D] text-[24px]">24h </div>
                <Statistic className=" text-[24px]" value={89.4} />
            </div>
            <GradientAreaChart />
            <Divider className="my-[10px]" />
            <div className="flex flex-row flex-wrap items-center justify-between">
                <div className="flex flex-col w-25">
                    <div className="text-[#5C6068] text-[12px]">MKT Cap</div>
                    <div className="text-[14px]">{formatAmount(12323,2,'$')}</div>
                </div>
                <div className="flex flex-col w-25">
                    <div className="text-[#5C6068] text-[12px]">Liq</div>
                    <div className="text-[14px]">{formatAmount(12323, 2, '$')}</div>
                </div>
                <div className="flex flex-col w-25">
                    <div className="text-[#5C6068] text-[12px]">24h Vol</div>
                    <div className="text-[14px]">{formatAmount(12323, 2, '$')}</div>
                </div>
                <div className="flex flex-col w-25">
                    <div className="text-[#5C6068] text-[12px]">Holders</div>
                    <div className="text-[14px]">{formatAmount(12323, 2, '$')}</div>
                </div>
                <div className="flex flex-col mt-[10px]">
                    <div className="text-[#5C6068] text-[12px]">Smart money net inflow</div>
                    <div className="text-[14px]">{formatAmount(12323, 2, '$')}</div>
                </div>
            </div>
            </div>}
      </div>
    </Drawer>
  );
};
