"use client";
import { CHARTS_NAME } from "@/constant/namechart";
import React from "react";
import ReactApexChart from "react-apexcharts";

function BarChart() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {CHARTS_NAME.filter((item) => item.data).map((item) => {
        return (
          <div key={item.slug} className="border-[1px] p-1 rounded">
            <ReactApexChart
              type="bar"
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

export default BarChart;
