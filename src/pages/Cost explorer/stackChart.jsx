import React, { useEffect, useState } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFusioncharts from "react-fusioncharts";
import { PostCostExplorerData } from "../../API/costExplorer";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../../commonComponent/Loading";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { emptyChartData } from "./cost";
Charts(FusionCharts);
FusionTheme(FusionCharts);

function AwsCostStackedColumnChart({
  selectedChart,
  Allfilters,
  setTable,
  selectedDate,
  loading,
  setLoading,
}) {
  const chartRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const toastShown = useRef(false);
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const groupBy = queryParams.get("group");
  const accountList = useSelector((state) => state.accounts.value.accountsList);

  useEffect(() => {
    const resizeChart = () => {
      if (chartRef.current?.chartObj && containerRef.current) {
        chartRef.current.chartObj.resizeTo(
          containerRef.current.offsetWidth,
          400
        );
      }
    };

    const observer = new ResizeObserver(resizeChart);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const isDataComplete =
      groupBy &&
      accountList &&
      accountList.length > 0 &&
      selectedDate?.startDate &&
      selectedDate?.endDate;

    if (selectedDate.startDate == null || selectedDate.endDate == null ) {
      return;
    }

    if (!isDataComplete) {
      if (!toastShown.current) {
        toast.error("Please select atleast one account.");
        toastShown.current = true;
      }
      setLoading(false);
      return;
    }
    toastShown.current = false;

    const fetchData = async () => {
      try {
        setTable([]);
        setLoading(true);
        setError(null);

        const response = await PostCostExplorerData(groupBy, {
          accountId: accountList,
          startDate: selectedDate.startDate,
          endDate: selectedDate.endDate,
          filters: Allfilters,
        });

        if (response.status === 200) {
          const finalData = buildTooltipChartData(response.data.chartData);
          setChartData(finalData);
          setTable(response.data.tableData);
        } else if (response.status === 401) {
          toast.error(response.response.data.message);
          navigate("/");
        } else if (response.status === 400) {
          toast.error(response.response.data.message);
          setTable([]);
          setChartData(emptyChartData);
        }
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [groupBy, Allfilters, selectedDate, accountList]);

  if (loading) {
    return (
      <div
        ref={containerRef}
        className="w-full h-96 flex items-center justify-center"
      >
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div
        ref={containerRef}
        className="w-full h-96 flex items-center justify-center text-red-500"
      >
        {error}
      </div>
    );
  }

  if (!chartData) {
    return (
      <div
        ref={containerRef}
        className="w-full h-96 flex items-center justify-center text-gray-500"
      >
        No data available
      </div>
    );
  }

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

function buildTooltipChartData(chartData) {
  const categories = chartData.categories[0].category;
  const dataset = chartData.dataset;

  const totalsByIndex = categories.map((_, idx) =>
    dataset.reduce((sum, s) => sum + Number(s.data[idx]?.value || 0), 0)
  );

  const enhancedDataset = dataset.map((series, seriesIdx) => {
    const isLastSeries = seriesIdx === dataset.length - 1;

    return {
      ...series,
      data: series.data.map((point, idx) => {
        const value = Number(point.value || 0);
        const total = totalsByIndex[idx];
        const percent = total ? ((value * 100) / total).toFixed(2) : "0.00";

        return {
          value: point.value,
          toolText: `
            <div class="fc-tooltip">

              
              ${
                seriesIdx === 0
                  ? `<div class="fc-tooltip-header">
                ${categories[idx].label} </div>`
                  : ""
              }

              <!-- ROW -->
              <div class="fc-tooltip-row">
                <span>${series.seriesname}</span>
                <b>$${value.toLocaleString()} (${percent}%)</b>
              </div>

              <!-- FOOTER (ONLY ONCE) -->
              ${
                isLastSeries
                  ? `
                    <div class="fc-tooltip-footer">
                      <span>Total</span>
                      <b>$${total.toLocaleString()}</b>
                    </div>
                  `
                  : ""
              }

            </div>
          `,
        };
      }),
    };
  });

  return {
    ...chartData,
    chart: {
      ...chartData.chart,
      plotToolText: "",
    },
    dataset: enhancedDataset,
  };
}
