import {
  Avatar,
  AvatarGroup,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Table from "@mui/material/Table";
import React from "react";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import { Favorite } from "./favorite";
import { SvgThunderboltFill, SvgWhale } from "@/assets/svg";
import { Statistic } from "../components/statistic";
import { formatAddress, formatAmount } from "../components/format";
import Link from "next/link";

type Wallet = {
  address: string;
};

type Props = {
  wallets: Wallet[];
};

export const WalletTable = (props: Props) => {
  const { wallets } = props;
  return (
    <Table>
      <TableHead>
        <TableRow className="bg-[#212325]">
          <TableCell
            className="rounded-s-[10px]"
            style={{
              fontSize: 12,
              border: 0,
              paddingTop: 4,
              paddingBottom: 4,
            }}>
            Wallet
          </TableCell>
          <TableCell
            align="right"
            className=""
            style={{
              fontSize: 12,
              border: 0,
              paddingTop: 4,
              paddingBottom: 4,
            }}>
            1D Pnl
          </TableCell>
          <TableCell
            align="right"
            className=""
            style={{
              fontSize: 12,
              border: 0,
              paddingTop: 4,
              paddingBottom: 4,
            }}>
            7D Pnl
          </TableCell>
          <TableCell
            align="center"
            className=""
            style={{
              fontSize: 12,
              border: 0,
              paddingTop: 4,
              paddingBottom: 4,
            }}>
            7D Win Rate
          </TableCell>
          <TableCell
            align="center"
            className=""
            style={{
              fontSize: 12,
              border: 0,
              paddingTop: 4,
              paddingBottom: 4,
            }}>
            7D TX
          </TableCell>
          <TableCell
            align="center"
            className="rounded-e-[10px]"
            style={{
              fontSize: 12,
              border: 0,
              paddingTop: 4,
              paddingBottom: 4,
            }}>
            7D Profit
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {wallets.map((wallet) => {
          return (
            <TableRow key={wallet.address}>
              <TableCell
                className="rounded-s-[10px]"
                style={{
                  fontSize: 12,
                  border: 0,
                  paddingTop: 4,
                  paddingBottom: 4,
                }}>
                <WalletCell wallet={wallet} />
              </TableCell>
              <TableCell
                className="rounded-s-[10px]"
                style={{
                  fontSize: 12,
                  border: 0,
                  paddingTop: 4,
                  paddingBottom: 4,
                }}>
                <PNLCell />
              </TableCell>
              <TableCell
                className="rounded-s-[10px]"
                style={{
                  fontSize: 12,
                  border: 0,
                  paddingTop: 4,
                  paddingBottom: 4,
                }}>
                <PNLCell />
              </TableCell>
              <TableCell
                align="center"
                className="rounded-s-[10px]"
                style={{
                  fontSize: 12,
                  border: 0,
                  paddingTop: 4,
                  paddingBottom: 4,
                }}>
                80%
              </TableCell>
              <TableCell
                align="center"
                className="rounded-s-[10px]"
                style={{
                  fontSize: 12,
                  border: 0,
                  paddingTop: 4,
                  paddingBottom: 4,
                }}>
                B:6 / S:2
              </TableCell>
              <TableCell
                align="center"
                className="rounded-s-[10px]"
                style={{
                  fontSize: 12,
                  border: 0,
                  paddingTop: 4,
                  paddingBottom: 4,
                }}>
                <PNLProfileCell />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

type WalletCellProps = {
    wallet: Wallet;
};
const WalletCell = ({wallet}: WalletCellProps) => {
  return (
    <div className="relative">
      <Favorite
        isTrue={false}
        className=" absolute left-[-14px] h-full flex flex-col items-center justify-center"
      />
      <div className="flex flex-col px-1">
        <Link href={`/watch-list/${wallet.address}`} className="flex flex-row items-center gap-2">
          <div className="text-[16px]">{formatAddress(wallet.address)}</div>
          <div className="flex flex-row items-center gap-2">
            <SvgWhale />
            <SvgThunderboltFill />
          </div>
        </Link>
        <div className="flex flex-row items-center ">
          <AvatarGroup>
            <Avatar sx={{ width: 18, height: 18 }} src="/images/avatar/1.png" />
            <Avatar sx={{ width: 18, height: 18 }} src="/images/avatar/1.png" />
            <Avatar sx={{ width: 18, height: 18 }} src="/images/avatar/1.png" />
            <Avatar sx={{ width: 18, height: 18 }} src="/images/avatar/1.png" />
          </AvatarGroup>
        </div>
      </div>
    </div>
  );
};

const PNLCell = (props: any) => {
  return (
    <div className="flex flex-col">
      <Statistic value={99} algin="justify-end" />
      <Statistic
        value={999999}
        algin="justify-end"
        decimal={9}
        format={(value) => formatAmount(value, 2, "$")}
        showRate={false}
      />
    </div>
  );
};

const uData = [40, 30, 20, 20, -10, 20, 30];
// const xLabels = ["1 day", "2 day", "3 day", "4 day", "5 day", "6 day", "7 day"];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];
export const PNLProfileCell = () => {
  return (
    <div className="flex items-end justify-center h-[30px] gap-1">
      <div className="w-[4px] bg-[#2DC24E] h-[10%] rounded-t-[1px]"></div>
      <div className="w-[4px] bg-[#2DC24E] h-[30%] rounded-t-[1px]"></div>
      <div className="w-[4px] bg-[#2DC24E] h-[20%] rounded-t-[1px]"></div>
      <div className="w-[4px] bg-[#2DC24E] h-[40%] rounded-t-[1px]"></div>
      <div className="w-[4px] bg-[#2DC24E] h-[100%] rounded-t-[1px]"></div>
      <div className="w-[4px] bg-[#FF543D] h-[20%] rounded-t-[1px]"></div>
    </div>
  );
};
