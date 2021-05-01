import React from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { NATIONALITY_TYPE, NATIONALITY, PlayerDataKeys, DataKey } from "api/data/PlayerData";
import { addInitialChartConfig, ChartType, ChartTypeSet } from "store/slice/chart/ChartConfig";
import { getPlayerData } from "store/slice/data/player/PlayerData";
import { addInitialQueryCondition } from "store/slice/query/QueryCondition";
import { addChartAccessor } from "store/slice/app/App";
import { EditDialog } from "components/EditDialog/EditDialog";
import { AddingButton } from "components/AddingButton/AddingButton";
import { SettingElement } from "components/SettingElement";

export const CreateChartDialog = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const dispatch = useDispatch();
  const onClickOk = () => {
    if (ref.current) {
      const { nationality, xAxis, yAxis, chartType } = ref.current.getSettingValues();
      const chartId = nanoid();
      const queryConditionId = nanoid();
      dispatch(
        addChartAccessor({
          chartAccessor: {
            chartId,
            queryConditionId,
          },
        })
      );
      dispatch(
        addInitialChartConfig({
          chartId,
          chartTitle: nationality,
          chartType,
        })
      );
      dispatch(
        addInitialQueryCondition({
          queryConditionId,
          nationality,
          axis: { x: xAxis, y: yAxis, z: PlayerDataKeys.shortName },
        })
      );
      dispatch(getPlayerData({ nationality }));
    }
    setOpenDialog(false);
  };
  const ref = React.useRef<ChartDialogContentsRefType>(null);
  return (
    <>
      <AddingButton onClick={() => setOpenDialog(true)} />
      <EditDialog
        open={openDialog}
        onClickCancel={() => setOpenDialog(false)}
        onClickOk={onClickOk}
        title="チャートを新規作成"
        renderDialogContents={<ChartDialogContents ref={ref} />}
      />
    </>
  );
};

type ChartDialogContentsRefType = {
  getSettingValues: () => {
    nationality: NATIONALITY_TYPE;
    xAxis: DataKey;
    yAxis: DataKey;
    chartType: ChartType;
  };
};

const ChartDialogContents = React.forwardRef<ChartDialogContentsRefType, {}>((props, ref) => {
  const [nationality, setNationality] = React.useState<NATIONALITY_TYPE>(NATIONALITY.Japan);
  const [xAxis, seXAxis] = React.useState<DataKey>(PlayerDataKeys.age);
  const [yAxis, seYAxis] = React.useState<DataKey>(PlayerDataKeys.overall);
  // const [chartType, setChartType] = React.useState<ChartType>(ChartTypeSet.SCATTER); // 現状チャート種類はscatter固定のため保留

  React.useImperativeHandle(ref, () => ({
    getSettingValues: () => {
      return { nationality, xAxis, yAxis, chartType: ChartTypeSet.SCATTER };
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.dialogContent}>
      <SettingElement title="選手の国籍">
        <Select
          value={nationality}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
            const value = event.target.value as NATIONALITY_TYPE;
            setNationality(value);
          }}
        >
          {Object.values(NATIONALITY).map((value, i) => {
            return (
              <MenuItem key={`${i.toFixed()}:${value}`} value={value}>
                <Typography>{value}</Typography>
              </MenuItem>
            );
          })}
        </Select>
      </SettingElement>
      <Divider />
      <SettingElement title="X軸">
        <Select
          value={xAxis}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
            const value = event.target.value as DataKey;
            seXAxis(value);
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
            seYAxis(value);
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
      {/* 現状チャート種類はscatter固定のため保留 */}
      {/* <Divider />
      <SettingElement title="チャートの種類">
        <Select
          value={chartType}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
            const value = event.target.value as ChartType;
            setChartType(value);
          }}
        >
          {Object.values(ChartTypeSet).map((value, i) => {
            return (
              <MenuItem key={`${i.toFixed()}:${value}`} value={value}>
                <Typography>{value}</Typography>
              </MenuItem>
            );
          })}
        </Select>
      </SettingElement> */}
    </div>
  );
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogContent: {
      width: 350,
      margin: theme.spacing(1),
    },
  })
);
