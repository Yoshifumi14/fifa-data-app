import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChartContext } from "./ChartLogic/ChartContext";
import { appEditingChartSelector } from "../store/slice/app/AppSelector";
import { nationalitySelector } from "../store/slice/data/player/PlayerDataSelector";
import { useChartCondfigSelector, useQueryConditionSelector } from "./ChartLogic/ChartHooks";
import { chartCondfigChartTitleSelector } from "../store/slice/chart/ChartConfigSelector";
import { chartAccessorEqultyFn } from "../store/slice/app/AppUtils";
import { SettingElement } from "../components/SettingElement/SettingElement";
import Select from "@material-ui/core/Select";
import {
  queryConditionNationalitySelector,
  queryConditionAxisXSelector,
  queryConditionAxisYSelector,
} from "../store/slice/query/QueryConditionSelector";
import { Divider, TextField, MenuItem, Slider } from "@material-ui/core";
import { setChartConfigTitle } from "store/slice/chart/ChartConfig";
import { PlayerDataKeys, DataKey } from "../api/data/PlayerData";
import Typography from "@material-ui/core/Typography";
import { setQueryConditionAxis } from "store/slice/query/QueryCondition";
// import { chartCondfigXRangeSelector, chartCondfigYRangeSelector } from "../store/slice/chart/ChartConfigSelector";

export const EditChartDrawer = () => {
  const chartAccesser = useSelector(appEditingChartSelector, chartAccessorEqultyFn);
  if (chartAccesser) {
    return (
      <ChartContext.Provider value={chartAccesser}>
        <EditChartDrawerBody />
      </ChartContext.Provider>
    );
  } else {
    return null;
  }
};

const EditChartDrawerBody = () => {
  // todo: 設定値変更時のチャート側の再レンダリング抑制
  const dispath = useDispatch();
  const { chartId, queryConditionId } = useContext(ChartContext);
  // const nationality = useQueryConditionSelector(queryConditionNationalitySelector)  // 国変更は面倒なので後
  const title = useChartCondfigSelector(chartCondfigChartTitleSelector);
  const xAxis = useQueryConditionSelector(queryConditionAxisXSelector);
  // const xRange = useChartCondfigSelector(chartCondfigXRangeSelector); // todo
  const yAxis = useQueryConditionSelector(queryConditionAxisYSelector);
  // const yRange = useChartCondfigSelector(chartCondfigYRangeSelector); // todo
  return (
    <div>
      <SettingElement title="タイトル">
        <TextField
          value={title}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
            const value = event.target.value as string;
            dispath(setChartConfigTitle({ chartId, title: value }));
          }}
        />
      </SettingElement>
      <Divider />
      <SettingElement title="X軸">
        <Select
          value={xAxis}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
            const value = event.target.value as DataKey;
            dispath(setQueryConditionAxis({ queryConditionId, axis: { x: value, y: yAxis } }));
          }}
        >
          {Object.values(PlayerDataKeys).map((value, i) => {
            return (
              <MenuItem key={`${i.toFixed()}:${value}`} value={value}>
                <Typography>{value}</Typography>
              </MenuItem>
            );
          })}
        </Select>
      </SettingElement>
      <Divider />
      <SettingElement title="Y軸">
        <Select
          value={yAxis}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
            const value = event.target.value as DataKey;
            dispath(setQueryConditionAxis({ queryConditionId, axis: { x: xAxis, y: value } }));
          }}
        >
          {Object.values(PlayerDataKeys).map((value, i) => {
            return (
              <MenuItem key={`${i.toFixed()}:${value}`} value={value}>
                <Typography>{value}</Typography>
              </MenuItem>
            );
          })}
        </Select>
      </SettingElement>
      <Divider />
      {/* <SettingElement title="X軸の範囲">
        <Slider
          // classes={{
          // 	markLabel: classes.markLabel,
          // }}
          valueLabelDisplay="auto"
          // step={step}
          // marks={marks}
          value={xRange}
          min={0}
          max={100}
          onChange={(event: React.ChangeEvent<{}>, value: number | number[]) => {
            dispath(setChartConfigXRange({ chartId, xRange: value as number[] }));
          }}
        />
      </SettingElement> */}
    </div>
  );
};
