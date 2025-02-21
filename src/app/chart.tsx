import { Input, Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Avatar, Divider } from "@mui/material";
import { EventEmitter } from 'events'
import Link from "next/link";
import React from "react";
import { Treemap, ResponsiveContainer } from "recharts";
import { formatAmount } from "./components/format";
import { useEventEmitter } from "./hooks/useEventEmitter";
import rank from './token/rank-data.json'

type Props = {};

const data1 = rank.data.rank.splice(0, 10).map(d=>{
  return {
    name: d.symbol,
    token: d,
    children: [{size: Math.ceil((Math.random()*100))}]
  }
}).sort((a, b)=>{
  return b.children[0].size - a.children[0].size
})

// menu time type
export type MenuTimeType = "15m" | "30m" | "1h" | "6h" | "12h" | "24h";
export type MenuTimeTypeMap = {
  [key in MenuTimeType]: string;
};

export const TreeMapChart = (props: Props) => {
  const [tab, setTab] = React.useState("capital_flow");
  const [time, setTime] = React.useState<MenuTimeType>("1h");
  const [from, setFrom] = React.useState<string | number>(10000000);
  const [to, setTo] = React.useState<string | number>(100000000);

  const onFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === "") {
      setFrom("");
    }
    if (!isNaN(parseFloat(value)) && isFinite(+value) && !isNaN(+value)) {
      setFrom(value);
    }
  };
  const onToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === "") {
      setTo("");
    }
    if (!isNaN(parseFloat(value)) && isFinite(+value) && !isNaN(+value)) {
      setTo(value);
    }
  };

  return (
    <div className="flex flex-col bg-[#18181B]  p-4 rounded-[14px] gap-[16px]">
      <div className="flex flex-row text-[18px]">Token Analysis Dashboard</div>
      <div className={`bg-[#212325] w-[300px] rounded-[24px] `}>
        <button
          onClick={() => {
            setTab("capital_flow");
          }}
          className={`w-[150px] rounded-[24px] text-[14px] p-[7px] cursor-pointer ${
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
          className={`w-[150px] rounded-[24px] text-[14px] p-[7px] cursor-pointer ${
            tab === "smrt_buy" ? "bg-[#ffffff] text-[#1A1D1E]" : "bg-[#212325] "
          }`}>
          SMRT Buy
        </button>
      </div>
      <div className="flex flex-row gap-[10px]">
        <Popover>
          <div className="text-[12px]">Mkt cap</div>
          <PopoverButton className="block  focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
            <div className="flex flex-row text-[14px] ml-[4px] cursor-pointer">
              ${formatAmount(+from, 0)} – ${formatAmount(+to, 0)}
            </div>
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom start"
            className="divide-y divide-white/5 rounded-xl bg-[#18181B] text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0">
            <div className="p-3 text-white gap-4 flex flex-col">
              <div className="flex flex-row  items-center justify-evenly">
                <Input
                  value={from}
                  onChange={onFromChange}
                  className="block outline-none w-[110px]  rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white"
                />{" "}
                -{" "}
                <Input
                  value={to}
                  onChange={onToChange}
                  className="block outline-none w-[110px]  rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <button
                  onClick={() => {
                    setFrom(0);
                    setTo(1000000);
                  }}
                  data-active={+from === 0 && +to === 1000000}
                  className="flex h-[24px] w-[90px] items-center justify-center rounded-[14px] text-[#8D8D8D]  data-[active=true]:text-white bg-[#212325]">{`<$1M`}</button>
                <button
                  onClick={() => {
                    setFrom(1000000);
                    setTo(10000000);
                  }}
                  data-active={+from === 1000000 && +to === 10000000}
                  className="flex h-[24px] w-[90px] items-center justify-center rounded-[14px] text-[#8D8D8D]  data-[active=true]:text-white bg-[#212325]">{`$1M−10M`}</button>
                <button
                  onClick={() => {
                    setFrom(10000000);
                    setTo(100000000);
                  }}
                  data-active={+from === 10000000 && +to === 100000000}
                  className="flex h-[24px] w-[90px] items-center justify-center rounded-[14px] text-[#8D8D8D]  data-[active=true]:text-white bg-[#212325]">{`$10M−100M`}</button>
              </div>
            </div>
          </PopoverPanel>
        </Popover>
        <Divider />
        <div>
          <div className="text-[12px]">Time</div>
          <div className="flex flex-row text-[14px] ml-[4px] gap-4 text-[#8D8D8D]">
            <div
              data-active={time === "15m"}
              onClick={() => setTime("15m")}
              className="cursor-pointer data-[active=true]:text-white">
              15m
            </div>
            <div
              data-active={time === "30m"}
              onClick={() => setTime("30m")}
              className="cursor-pointer data-[active=true]:text-white">
              30m
            </div>
            <div
              data-active={time === "1h"}
              onClick={() => setTime("1h")}
              className="cursor-pointer data-[active=true]:text-white">
              1h
            </div>
            <div
              data-active={time === "6h"}
              onClick={() => setTime("6h")}
              className="cursor-pointer data-[active=true]:text-white">
              6h
            </div>
            <div
              data-active={time === "12h"}
              onClick={() => setTime("12h")}
              className="cursor-pointer data-[active=true]:text-white">
              12h
            </div>
            <div
              data-active={time === "24h"}
              onClick={() => setTime("24h")}
              className="cursor-pointer data-[active=true]:text-white">
              24h
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <Treemap
            data={data1}
            dataKey="size"
            stroke="transparent"
            fill="#8884d8"
            content={<CustomizedContent />}
          />
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomizedContent = (props: any) => {
  const emitter = useEventEmitter()
  const { root, depth, x, y, width, height, index, payload, rank, name } =
    props;
  const {token} = root
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: "#2DC24E",
          stroke: "#000",
          strokeWidth: 6 / (depth + 1e-10),
          //   strokeOpacity: 1 / (depth + 1e-10),
        }}
      />

      <foreignObject x={x} y={y} width={width} height={height}>
        {/* <div className=" absolute top-0 bottom-0 left-0 right-0 opacity-80" style={{
            backgroundImage: `url(${token?.logo})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            opacity:0.3
        }} onClick={()=>{
          emitter.emit('openTokenDrawer', {token})
        }}/> */}
        <div className="w-full h-full cursor-pointer" onClick={()=>{
          emitter.emit('openTokenDrawer', {token})
        }} >
          <div className="flex flex-col">
            <div className="flex flex-row flex-wrap items-center p-[4px] gap-2">
              <Avatar
                className=""
                sx={{ width: 42, height: 42 }}
                src={token?.logo}
              />
              <div className="flex flex-col mix-blend-hard-light">
                <div className="text-[20px]">{token?.symbol}</div>
                <div className="text-[14px]">Growth：6</div>
              </div>
              <div className="flex flex-col text-[12px]">
                <div>Mkt Cap：$4.2M </div>
                <div>24h：+547.4% </div>
              </div>
            </div>
          </div>
        </div>
      </foreignObject>
    </g>
  );
};
