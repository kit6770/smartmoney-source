import {
  Avatar,
  AvatarGroup,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Table from "@mui/material/Table";
import React, { useCallback, useEffect, useState } from "react";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import { Favorite } from "./favorite";
import { SvgThunderboltFill, SvgWhale } from "@/assets/svg";
import { Statistic } from "../components/statistic";
import { formatAddress, formatAmount } from "../components/format";
import Link from "next/link";
import useSWRMutation from "swr/mutation";

type Wallet = {
  address: string;
  pnl_1d: string;
  pnl_1d_sol: string
  pnl_7d: string;
  pnl_7d_sol: string
  pnl_30d: string;
  pnl_30d_sol: string
  winning_rate_7d: number
};

type Props = {
  wallets: Wallet[];
};

export const WalletTable = (props: Props) => {
    const [data, setData] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  

  // 使用 Intersection Observer 检测底部元素是否进入视口
//   const { ref, inView } = useInView();

  // 加载更多数据
//   const loadMoreData = useCallback(async () => {
//     if (loading || !hasMore) return;
//     setLoading(true);
//     const newData = await fetchData(page);
//     if (newData.length === 0) {
//       setHasMore(false); // 如果没有更多数据，停止加载
//     } else {
//       setData((prev) => [...prev, ...newData]);
//       setPage((prev) => prev + 1);
//     }
//     setLoading(false);
//   }, [page, loading, hasMore]);

  // 当底部元素进入视口时，触发加载更多数据
//   useEffect(() => {
//     if (inView && hasMore) {
//       loadMoreData();
//     }
//   }, [inView, hasMore, loadMoreData]);
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
        {wallets?.map((wallet) => {
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
                <PNLCell rate={wallet.pnl_1d} value={wallet.pnl_1d_sol} />
              </TableCell>
              <TableCell
                className="rounded-s-[10px]"
                style={{
                  fontSize: 12,
                  border: 0,
                  paddingTop: 4,
                  paddingBottom: 4,
                }}>
                <PNLCell rate={wallet.pnl_7d}  value={wallet.pnl_7d_sol} />
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
                {wallet?.winning_rate_7d}
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
        <Link href={`/wallet/${wallet.address}`} className="flex flex-row items-center gap-2">
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

type PNLProps = {
    rate: string;
    value: string;
}

const PNLCell = ({rate, value}: PNLProps) => {
  return (
    <div className="flex flex-col">
      <Statistic value={+rate} algin="justify-end" />
      <Statistic
        value={+value}
        algin="justify-end"
        prefix="SOL"
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
