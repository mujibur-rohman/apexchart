"use client";
import { CHARTS_NAME } from "@/constant/namechart";
import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function Charts() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {CHARTS_NAME.filter((item) => item.data).map((item, i) => {
        return (
          <div key={i} className="border-[1px] p-1 rounded">
            <ReactApexChart
              type={item.type}
              series={item.data?.series}
              options={item.data?.options}
            />
            <p className="text-center">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Charts;
