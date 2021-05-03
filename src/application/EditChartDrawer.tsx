import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divider, TextField, MenuItem, Select, Typography } from "@material-ui/core";

import { PlayerDataKeys, DataKey, POSITION_LIST } from "api/data/PlayerData";
import { appEditingChartSelector } from "store/slice/app/AppSelector";
import { chartAccessorEqultyFn } from "store/slice/app/AppUtils";
import { setQueryConditionAxis, setQueryConditionPosition } from "store/slice/query/QueryCondition";
import {
  queryConditionPositionSelector,
  queryConditionAxisXSelector,
  queryConditionAxisYSelector,
} from "store/slice/query/QueryConditionSelector";
import { setChartConfigTitle } from "store/slice/chart/ChartConfig";
import { chartCondfigChartTitleSelector } from "store/slice/chart/ChartConfigSelector";
import { SettingElement } from "components/SettingElement/SettingElement";

import { ChartContext } from "./ChartLogic/ChartContext";
import { useChartCondfigSelector, useQueryConditionSelector } from "./ChartLogic/ChartHooks";

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
  const dispath = useDispatch();
  const { chartId, queryConditionId } = useContext(ChartContext);
  const title = useChartCondfigSelector(chartCondfigChartTitleSelector);
  const xAxis = useQueryConditionSelector(queryConditionAxisXSelector);
  const yAxis = useQueryConditionSelector(queryConditionAxisYSelector);
  const position = useQueryConditionSelector(queryConditionPositionSelector);
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
      <SettingElement title="ポジション">
        <Select
          value={position ?? ""}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
            const value = event.target.value as string;
            dispath(setQueryConditionPosition({ queryConditionId, position: value }));
          }}
        >
          {Object.values(POSITION_LIST).map((value, i) => {
            return (
              <MenuItem key={`${i.toFixed()}:${value}`} value={value}>
                <Typography>{value !== "" ? value : "undefined"}</Typography>
              </MenuItem>
            );
          })}
        </Select>
      </SettingElement>
    </div>
  );
};
