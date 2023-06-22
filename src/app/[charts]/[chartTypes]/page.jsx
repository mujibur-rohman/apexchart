"use client";
import React from "react";
import dynamic from "next/dynamic";
import { CHARTS_NAME } from "@/constant/namechart";
import { usePathname } from "next/navigation";
import getPathName from "@/lib/getPathnameIndex";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function ChartType() {
  const pathname = usePathname();
  return CHARTS_NAME.filter(
    (item) => item.slug === getPathName(pathname, 1)
  ).map((item, i) => {
    return (
      <div key={i} className="border-[1px] w-1/2 mx-auto p-4 rounded">
        <ReactApexChart
          type={item.type}
          series={item.data?.series}
          options={item.data?.options}
        />
        <p className="text-center">{item.name}</p>
      </div>
    );
  });
}

export default ChartType;
