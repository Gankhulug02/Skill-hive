import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Box, Button } from "@mui/material";
import { Props } from "react-apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const Steam = () => {
  const [salaryData, setSalaryData] = useState<any>([]);
  const [catData, setCatData] = useState<any>([]);
  const [seriesData, setSeriesData] = useState<any>([]);
  const chartTextColor = "rgba(140,140,140)";
  const series: ApexAxisChartSeries = [
    {
      name: "Salary",
      data: seriesData,
    },
  ];
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      height: "auto",
      toolbar: {
        show: false,
      },
    },
    fill: {
      colors: ["#fff"],
      type: "gradient",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#1e90ff"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: catData,
    },
    yaxis: {
      show: true,
    },
    markers: {
      size: 4,
      hover: {
        size: 6,
      },
    },
  };

  const filterData = useCallback(
    (e: number) => {
      if (!e) {
        e = 7;
      }
      const last7Data = salaryData.slice(salaryData.length - e);
      console.log(last7Data);
      let catArr = [];
      let seriesArr = [];
      for (let i = 0; i < last7Data.length; i++) {
        catArr.push(last7Data[i].date);
        seriesArr.push(last7Data[i].salary);
      }
      setCatData(catArr);
      setSeriesData(seriesArr);
    },
    [salaryData]
  );

  const dataCreater = () => {
    for (let year = 23; year <= 23; year++) {
      let allData = [];
      for (let month = 0; month <= 12; month++) {
        for (let day = 1; day <= 30; day++) {
          const oneDaySalary = Math.round(
            Math.random() * (250000 - 4000 + 1) + 4000
          );
          const date = `${year}-${month}-${day}`;
          const oneDayData = { date: date, salary: oneDaySalary };
          allData.push(oneDayData);
        }
      }
      setSalaryData(allData);
    }
  };

  useEffect(() => {
    dataCreater();
    filterData(10);
  }, [salaryData.length]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <Box sx={{ width: "100%", height: "100%" }}>
        <Chart options={options} series={series} type="area" height={350} />
      </Box>
      <Box>
        <Button
          onClick={() => {
            filterData(60);
          }}
        >
          last 2 month
        </Button>
        <Button
          onClick={() => {
            filterData(30);
          }}
        >
          last month
        </Button>
        <Button
          onClick={() => {
            filterData(7);
          }}
        >
          last week
        </Button>
        <Button
          onClick={() => {
            filterData(salaryData.length);
          }}
        >
          all
        </Button>
      </Box>
    </Box>
  );
};
