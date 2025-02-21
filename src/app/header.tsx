'use client'
import React from "react";
import { Avatar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

export const Header = (props: Props) => {
  const pathname = usePathname()
  return (
    <header className="w-[100vw]">
      <div className="flex flex-row items-center justify-between p-[20px]">
        <div className="flex items-center gap-2">
          <Image
            src={"/smartmoney/logo.svg"}
            alt="logo"
            width={44}
            height={44}
          />
          <div className="text-[#fff] text-[24px] italic font-bold">
            SMART.MONEY
          </div>
          <div className="flex flex-row items-center justify-center ml-20 gap-10">
            <Link
              href={"/"}
              className={`${
                pathname === "/"
                  ? "text-[#fff] font-bold border-b-[2px] border-[#fff]"
                  : "text-[#8D8D8D]"
              } text-[#8D8D8D] text-[16px] cursor-pointer pb-1.5`}
              onClick={() => {
                // setTab("Analysis");
              }}
              >
              Analysis
            </Link>
            <Link
              href={'/watch-list'}
              className={`${
                pathname === "/watch-list"
                  ? "text-[#fff] font-bold border-b-[2px] border-[#fff]"
                  : "text-[#8D8D8D]"
              } text-[#8D8D8D] text-[16px] cursor-pointer pb-1.5`}
              onClick={() => {
                // setTab("WatchList");
              }}>
              WatchList
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[10px]">
          <div className="flex flex-row items-center bg-[#151718] px-[4px] py-[4px] pr-[10px] gap-[6px] rounded-full">
            <div className="w-[42px] h-[42px] flex items-center justify-center  rounded-full bg-[#212325]">
              <Image
                src="/smartmoney/search.svg"
                alt="search"
                width={22}
                height={22}
              />
            </div>
            <input
              placeholder="Search wallet address"
              className="outline-none  w-[260px]"
            />
          </div>
          <div className="flex items-center gap-[10px]">
            <Avatar src="/smartmoney/user.png" />
            <div>Alexim</div>
          </div>
        </div>
      </div>
    </header>
  );
};
