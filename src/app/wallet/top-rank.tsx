import React from "react";
import { Divider } from "../components/divider";
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { SvgCopy } from "@/assets/svg";
import { Statistic } from "../components/statistic";
import { formatAddress, formatAmount } from "../components/format";
import rankJson from "../token/rank-data.json";
// import shuffle from "lodash.shuffle";
import { animated, useTransition } from "@react-spring/web";

type Props = {};

export const TopRank = (props: Props) => {
  const [tab, setTab] = React.useState("capital_flow");
  const [rows, set] = React.useState(rankJson.data.rank);
  React.useEffect(() => {
    // const t = setInterval(() => set(shuffle), 10000);
    // return () => clearInterval(t);
  }, []);

  let height = 0;
  const transitions = useTransition(
    rows.map((data) => ({ ...data, y: (height += 49) - 49 })),
    {
      key: (item: any) => item.address,
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y }) => ({ y, height, opacity: 1 }),
      update: ({ y }) => ({ y, height }),
    }
  );
  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-row self-center bg-[#212325] my-[20px] w-[260px] rounded-[24px]`}>
        <button
          onClick={() => {
            setTab("capital_flow");
          }}
          className={`w-[130px] rounded-[24px] text-[14px] p-[7px] cursor-pointer ${
            tab === "capital_flow"
              ? "bg-[#ffffff] text-[#1A1D1E]"
              : "bg-[#212325] "
          }`}>
          Capital Flow
        </button>
        <button
          onClick={() => {
            setTab("smrt_buy");
          }}
          className={`w-[130px] rounded-[24px] text-[14px] p-[7px] cursor-pointer ${
            tab === "smrt_buy" ? "bg-[#ffffff] text-[#1A1D1E]" : "bg-[#212325] "
          }`}>
          SMRT Growth
        </button>
      </div>
      <Divider />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                paddingTop: 4,
                paddingBottom: 8,
                borderColor: "#ffffff26",
              }}>
              <div className="text-[12px]">Token/Post-Alert Max</div>
            </TableCell>
            <TableCell
              align="right"
              style={{
                paddingTop: 4,
                paddingBottom: 8,
                borderColor: "#ffffff26",
              }}>
              <div className="text-[12px]">Buy</div>
            </TableCell>
            <TableCell
              style={{
                paddingTop: 4,
                paddingBottom: 8,
                borderColor: "#ffffff26",
              }}>
              <div className="text-[12px]">Capital</div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ height, position: "relative" }}>
          {transitions((style, item, t, index) => (
            // <animated.div
            //   className={"absolute"}
            //   style={{ zIndex: index, ...style, height: 49 }}>
              <TableRow
                key={item.address}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0, padding: 0 },
                }}
                style={{ height: 49 }}>
                <TableCell sx={{ border: 0 }} style={{ padding: "4px 10px" }}>
                  <div className="flex flex-row items-center gap-2">
                    <Avatar
                      src={item.logo || ""}
                      sx={{ width: 34, height: 34 }}
                    />
                    <div className="flex flex-col">
                      <div>{item.symbol}</div>
                      <div className="flex flex-row items-center gap-1 text-[#666666] text-[12px]">
                        {formatAddress(item.address)} <SvgCopy />
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ border: 0 }}
                  style={{ padding: "4px 10px" }}>
                  <div className="flex flex-col">
                    <Statistic
                      value={3384000}
                      format={(value) => formatAmount(value, 2, "$")}
                      showRate={false}
                      algin="justify-end"
                    />
                    <div>7</div>
                  </div>
                </TableCell>
                <TableCell sx={{ border: 0 }} style={{ padding: "4px 10px" }}>
                  <div className="flex flex-row"></div>
                </TableCell>
              </TableRow>
            // </animated.div>
          ))}
          {/* {rankJson.data.rank.map((r) => {
            return (
              <TableRow
                key={r.address}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0, padding: 0 },
                }}>
                <TableCell sx={{ border: 0 }} style={{ padding: '4px 10px' }}>
                  <div className="flex flex-row items-center gap-2">
                    <Avatar src={r.logo || ""} sx={{ width: 34, height: 34 }} />
                    <div className="flex flex-col">
                      <div>{r.symbol}</div>
                      <div className="flex flex-row items-center gap-1 text-[#666666] text-[12px]">
                        {formatAddress(r.address)} <SvgCopy />
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ border: 0 }}
                  style={{ padding: '4px 10px' }}>
                  <div className="flex flex-col">
                    <Statistic
                      value={3384000}
                      format={(value) => formatAmount(value, "$")}
                      showRate={false}
                      algin="justify-end"
                    />
                    <div>7</div>
                  </div>
                </TableCell>
                <TableCell
                  sx={{ border: 0, padding: '4px 10px' }}
                  //   style={{ padding: 0 }}
                >
                  <div className="flex flex-row"></div>
                </TableCell>
              </TableRow>
            );
          })} */}
        </TableBody>
      </Table>
    </div>
  );
};
