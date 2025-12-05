import React, { useEffect, useRef } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFusioncharts from "react-fusioncharts";

Charts(FusionCharts);
FusionTheme(FusionCharts);

function AwsCostStackedColumnChart({selectedChart,}) {
  const chartRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const resizeChart = () => {
      if (chartRef.current?.chartObj && containerRef.current) {
        const width = containerRef.current.offsetWidth;
        chartRef.current.chartObj.resizeTo(width, 400);
      }
    };

    const observer = new ResizeObserver(resizeChart);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const chartData = {
    chart: {
      caption: "AWS Cost Breakdown",
      subcaption: "Daily Stacked Cost for Last 14 Days",
      xAxisName: "Date",
      yAxisName: "Cost (USD)",
      numberPrefix: "$",
      theme: "fusion",
      exportEnabled: "1",
      showLegend: "1",
      legendPosition: "bottom",
      animation: "0",
      usePlotGradientColor: "0",
      showValues: "0",
      plotSpacePercent: "20",
    },
    categories: [{
      category: [
        { label: "Jan 01" }, { label: "Jan 02" }, { label: "Jan 03" }, { label: "Jan 04" },
        { label: "Jan 05" }, { label: "Jan 06" }, { label: "Jan 07" }, { label: "Jan 08" },
        { label: "Jan 09" }, { label: "Jan 10" }, { label: "Jan 11" }, { label: "Jan 12" },
        { label: "Jan 13" }, { label: "Jan 14" }
      ],
    }],
    dataset: [
      {
        seriesname: "EC2 Compute Cost",
        data: [
          { value: "12" }, { value: "14" }, { value: "16" }, { value: "15" },
          { value: "18" }, { value: "20" }, { value: "22" }, { value: "21" },
          { value: "23" }, { value: "25" }, { value: "27" }, { value: "28" },
          { value: "26" }, { value: "24" }
        ],
      },
      {
        seriesname: "S3 Storage Cost",
        data: [
          { value: "4" }, { value: "5" }, { value: "6" }, { value: "6" },
          { value: "7" }, { value: "8" }, { value: "8" }, { value: "9" },
          { value: "9" }, { value: "10" }, { value: "11" }, { value: "12" },
          { value: "12" }, { value: "11" }
        ],
      },
      {
        seriesname: "Lambda Cost",
        data: [
          { value: "2" }, { value: "3" }, { value: "3" }, { value: "4" },
          { value: "5" }, { value: "6" }, { value: "7" }, { value: "6" },
          { value: "7" }, { value: "8" }, { value: "9" }, { value: "10" },
          { value: "9" }, { value: "8" }
        ],
      },
    ],
  };

  return (
    <div ref={containerRef} className="w-full">
      <ReactFusioncharts
        ref={chartRef}
        type={selectedChart}
        width="100%"
        height="400"
        dataFormat="JSON"
        dataSource={chartData}
      />
    </div>
  );
}

export default AwsCostStackedColumnChart;
