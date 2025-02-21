import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "1", value: 1 },
  { name: "2", value: 2 },
  { name: "3", value: 3 },
  { name: "4", value: 4 },
  { name: "5", value: 1890 },
  { name: "6", value: 2390 },
  { name: "7", value: 3490 },
  { name: "8", value: 3490 },
  { name: "9", value: 3590 },
  { name: "10", value: 3490 },
  { name: "12", value: 3000 },
  { name: "13", value: 2000 },
  { name: "14", value: 2780 },
  { name: "15", value: 1890 },
];

const GradientAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={160}>
      <AreaChart
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        {/* 定义渐变 */}
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2DC24E" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#18181B26" stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* X 轴 */}
        {/* <XAxis dataKey="name" /> */}

        {/* Y 轴 */}
        {/* <YAxis /> */}

        {/* 网格线 */}
        {/* <CartesianGrid strokeDasharray="3 3" /> */}

        {/* 提示工具 */}
        <Tooltip offset={10} />

        {/* 区域图 */}
        <Area
          type="monotone"
          dataKey="value"
          stroke="#2DC24E"
          fillOpacity={1}
          fill="url(#colorValue)" // 使用渐变
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default GradientAreaChart;