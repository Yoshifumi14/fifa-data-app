import React from "react";
import { AppLayout } from "../components/AppLayout";
import { CreateChartDialog } from "./CreateChartDialog";
import { useSelector, useDispatch } from "react-redux";
import { appChartAccessorListSelector, appDrawerOpenSelector } from "../store/slice/app/AppSelector";
import { ChartPaper } from "./ChartLogic/ChartPaper";
import { ChartContext } from "./ChartLogic/ChartContext";
import { setDrawerOpen } from "store/slice/app/App";
import { Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const App = () => {
  const dispatch = useDispatch();
  const drawerOpen = useSelector(appDrawerOpenSelector);
  const acceccerList = useSelector(appChartAccessorListSelector);
  return (
    <AppLayout
      appBarTitle="FIFA DATA PLOT"
      drawerContents={{
        headerTitle: "headerTitle",
        body: <div>hoge</div>,
      }}
      drawerOpen={drawerOpen}
      handleDrawerClose={() => dispatch(setDrawerOpen(false))}
    >
      <Box display="flex" flexWrap="wrap" alignContent="flex-start">
        {acceccerList.map((acc) => {
          return (
            <Box m={1}>
              <ChartContext.Provider value={{ chartId: acc.chartId, queryConditionId: acc.queryConditionId }}>
                <ChartPaper />
              </ChartContext.Provider>
            </Box>
          );
        })}
        <Box m={1}>
          <CreateChartDialog />
        </Box>
      </Box>
    </AppLayout>
  );
};
