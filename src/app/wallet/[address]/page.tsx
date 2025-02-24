"use client";
import { CopyButton } from "@/app/components/copy-button";
import { Divider } from "@/app/components/divider";
import { formatAddress } from "@/app/components/format";
import { Statistic } from "@/app/components/statistic";
import { Header } from "@/app/header";
import { Favorite } from "@/app/wallet/favorite";
import { SvgCircleBack, SvgThunderboltFill, SvgWhale } from "@/assets/svg";
import React from "react";

type Props = {
  params: Promise<{ address: string }>;
};

const Page = async ({ params }: Props) => {
  const { address } = await params;
  console.log(address);
  return (
    <div className="flex flex-col w-full items-center">
      <Header />
      <div className="flex flex-col self-center w-[960px]">
        <div
          onClick={() => window.history.back()}
          className="flex flex-row items-center gap-1 mb-[10px]">
          <SvgCircleBack />
          <div className="text-[20px] font-[600]">Back</div>
        </div>
        <div className="flex flex-col bg-[#18181B] p-4 rounded-[20px]">
          <div className="flex flex-row items-center justify-between">
            <div className="text-[26px]">{formatAddress(address)}</div>
            <div className="flex flex-row items-center gap-1">
              <Favorite />
              <div className="text-[14px]">Add Address</div>
            </div>
          </div>
          <CopyButton textToCopy={address}>
            <div className="text-[12px]">{address}</div>
          </CopyButton>
          <div className="flex flex-row flex-wrap items-center gap-2 mt-[20px]">
            <div className="flex flex-row items-center gap-1 p-1 bg-[#8979FF26] rounded-[6px]">
              <SvgWhale />
              <div className="text-[12px]">Whale</div>
            </div>
            <div className="flex flex-row items-center gap-1 p-1 bg-[#8979FF26] rounded-[6px]">
              <SvgThunderboltFill />
              <div className="text-[12px]">High-Frequency Trading</div>
            </div>
          </div>
          <div className="flex flex-row mt-[20px]">
            <div className="flex flex-col w-[180px]">
              <div className="text-[12px]">1D PnL</div>
              <Statistic className="text-[14px]" value={98.7} />
              <Statistic className="text-[14px]" prefix="$" value={989.7} showRate={false} />
            </div>
            <div className="flex flex-col w-[180px]">
              <div className="text-[12px]">7D PnL</div>
              <Statistic className="text-[14px]" value={98.7} />
              <Statistic className="text-[14px]" prefix="$" value={989.7} showRate={false} />
            </div>
            <div className="flex flex-col w-[180px]">
              <div className="text-[12px]">Win Rate(7D)</div>
              <div className="text-[14px]">51.4%</div>
            </div>
            <div className="flex flex-col w-[180px]">
              <div className="text-[12px]">7D TX</div>
              <div className="text-[14px]">B:5 / S:2</div>
            </div>
            <div className="flex flex-col w-[180px]">
              <div className="text-[12px]">Last active</div>
              <div className="text-[14px]">4d</div>
            </div>
          </div>
          <Divider />
        </div>
      </div>
    </div>
  );
};

export default Page;
