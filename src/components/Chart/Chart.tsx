import { useTheme } from "@material-ui/core";
import React from "react";
import PlotlyChart from "react-plotlyjs-ts";
import { useModeType } from "./Hooks";

export type ChartProps = {
  chartType: ChartType;
  xData: (number | string)[];
  yData: number[];
  zData?: (number | string)[];
  xRange?: number[];
  yRange?: number[];
  xAxisTitle?: string;
  yAxisTitle?: string;
};

export const ChartTypeSet = {
  /** 折れ線 */
  LINE: "line",
  /** 棒 */
  BAR: "bar",
  /** 散布図 */
  SCATTER: "scatter",
} as const;

export type ChartType = typeof ChartTypeSet[keyof typeof ChartTypeSet];

export const COMPONENT_NAME = "components/Chart";

const Chart = ({ chartType, xData, yData, zData, xRange, yRange, xAxisTitle, yAxisTitle }: ChartProps) => {
  const modeType = useModeType(chartType);
  const theme = useTheme();
  const data = [
    {
      ...modeType,
      x: xData,
      y: yData,
      text: zData,
      marker: {
        color: theme.palette.primary.main,
      },
    },
  ];
  const layout = {
    hovermode: "closest",
    transition: {
      duration: 1500,
      easing: "cubic-in-out",
    },
    width: 350,
    height: 300,
    margin: {
      l: 70,
      r: 35,
      b: 70,
      t: 25,
      pad: 15,
    },
    font: {
      color: theme.palette.primary.dark,
    },
    xaxis: {
      range: xRange,
      title: {
        text: xAxisTitle,
      },
    },
    yaxis: {
      range: yRange,
      title: {
        text: yAxisTitle,
      },
    },
  };
  const config = {
    displayModeBar: false,
  };
  // propsのドキュメント: https://plotly.com/javascript/react/
  return <PlotlyChart data={data} layout={layout} config={config} />;
};

export default React.memo(Chart);