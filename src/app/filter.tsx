import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Icon,
  Typography,
} from "@mui/material";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Image from "next/image";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import React from "react";
import { Divider } from "./components/divider";

type Props = {};

export const Filter = (props: Props) => {
  const [categories] = React.useState([
    { icon: "category", label: "Animal Themes", value: "Animal Themes" },
    { icon: "category", label: "AI Agent", value: "AI Agent" },
    { icon: "category", label: "Economic Models", value: "Economic Models" },
    { icon: "category", label: "Celebrity-Driven", value: "Celebrity-Driven" },
    { icon: "category", label: "Meme", value: "Meme" },
  ]);

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="text-[18px]">
        <div>Filter</div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="text-[12px] text-[#8D8D8D]">Your custom grouping</div>

        <Disclosure as="div" className="" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <div className="flex flex-row items-center gap-3">
              <Avatar
                src="/smartmoney/star.svg"
                sx={{ width: "20px", height: "20px" }}
              />
              <div className="text-[14px]">Customized</div>
            </div>
            <KeyboardArrowDownOutlinedIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            <div className="ml-[30px] flex flex-col gap-2">
              <div className="flex flex-row items-center justify-between">
                <div className="text-[#8D8D8D] text-[14px]">All</div>
                <Checkbox style={{ padding: 0 }} />
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="text-[#8D8D8D] text-[14px]">
                  Continued profits
                </div>
                <Checkbox style={{ padding: 0 }} />
              </div>
              <div className="flex flex-row items-center justify-between ">
                <div className="text-[#8D8D8D] text-[14px]">
                  High winning rate
                </div>
                <Checkbox style={{ padding: 0 }} />
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
      <Divider />
      <div className="flex flex-col gap-[10px]">
        <div className="text-[12px] text-[#8D8D8D]">Token Category</div>
        {categories.map(({ icon, label, value }: any) => {
          return (
            <div
              key={value}
              className="flex flex-row items-center justify-between ">
              <div className="flex flex-row items-center gap-2">
                <Avatar sx={{ width: 20, height: 20 }} src={icon} />
                <div className="text-[16px]">{label}</div>
              </div>
              <Checkbox value={value} style={{ padding: 0 }} />
            </div>
          );
        })}
      </div>

      <div
        className="flex flex-col gap-[10px]"
        style={{
          border: "2px solid transparent",
          background:
            "linear-gradient(#18181b, #18181b) padding-box, linear-gradient(to right, #D16BA5, #5FFBF1) border-box",
          borderRadius: "8px", // 可选，添加圆角效果
        }}>
        {/* 其他内容 */}
        <Image
          className="px-[10px] mt-[10px]"
          src="/smartmoney/ai.svg"
          width={98}
          height={24}
          alt="ai"
        />
        <div className="text-[14px] px-[10px]">
          Top-performing wallets show a win rate of 75% and an annual return of
          22%, with 40 high-potential trading opportunities identified in the
          last 7 days.Top-performing wallets show a win rate of 75% and an
          annual return
        </div>
      </div>
    </div>
  );
};
