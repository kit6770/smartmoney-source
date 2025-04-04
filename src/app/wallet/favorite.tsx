import { SvgIcon } from "@mui/material";
import React from "react";

type Props = {
  isTrue?: boolean;
  className?: string;
};

export const Favorite = ({ isTrue, className }: Props) => {
  return (
    <div className={className}>
      <StarSvg light={isTrue} />
    </div>
  );
};

const StarSvg = ({ light = false, width = 13, height = 12 }) => {
  if (light) {
    return (
      <SvgIcon
        style={{
          width,
          height,
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none">
          <path
            d="M7.76961 0.890312L8.79628 2.94365C8.93628 3.22948 9.30961 3.50365 9.62461 3.55615L11.4854 3.86531C12.6754 4.06365 12.9554 4.92698 12.0979 5.77865L10.6513 7.22531C10.4063 7.47031 10.2721 7.94281 10.3479 8.28115L10.7621 10.072C11.0888 11.4895 10.3363 12.0378 9.08211 11.297L7.33794 10.2645C7.02294 10.0778 6.50378 10.0778 6.18295 10.2645L4.43878 11.297C3.19044 12.0378 2.43211 11.4836 2.75878 10.072L3.17295 8.28115C3.24878 7.94281 3.11461 7.47031 2.86961 7.22531L1.42294 5.77865C0.571278 4.92698 0.845445 4.06365 2.03545 3.86531L3.89628 3.55615C4.20544 3.50365 4.57878 3.22948 4.71878 2.94365L5.74545 0.890312C6.30545 -0.223854 7.21544 -0.223854 7.76961 0.890312Z"
            fill="#F6BB42"
          />
        </svg>
      </SvgIcon>
    );
  }
  return (
    <SvgIcon
      style={{
        width,
        height,
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none">
        <path
          d="M7.76961 0.890312L8.79628 2.94365C8.93628 3.22948 9.30961 3.50365 9.62461 3.55615L11.4854 3.86531C12.6754 4.06365 12.9554 4.92698 12.0979 5.77865L10.6513 7.22531C10.4063 7.47031 10.2721 7.94281 10.3479 8.28115L10.7621 10.072C11.0888 11.4895 10.3363 12.0378 9.08211 11.297L7.33794 10.2645C7.02294 10.0778 6.50378 10.0778 6.18295 10.2645L4.43878 11.297C3.19044 12.0378 2.43211 11.4836 2.75878 10.072L3.17295 8.28115C3.24878 7.94281 3.11461 7.47031 2.86961 7.22531L1.42294 5.77865C0.571278 4.92698 0.845445 4.06365 2.03545 3.86531L3.89628 3.55615C4.20544 3.50365 4.57878 3.22948 4.71878 2.94365L5.74545 0.890312C6.30545 -0.223854 7.21544 -0.223854 7.76961 0.890312Z"
          fill="#8D8D8D"
        />
      </svg>
    </SvgIcon>
  );
};
