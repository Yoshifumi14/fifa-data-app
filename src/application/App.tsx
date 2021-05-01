import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@material-ui/core";

import { appChartAccessorListSelector, appDrawerOpenSelector } from "store/slice/app/AppSelector";
import { setDrawerOpen } from "store/slice/app/App";
import { ChartAccessor } from "store/slice/app/App";
import { AppLayout } from "components/AppLayout";

import { CreateChartDialog } from "./CreateChartDialog";
import { ChartPaper } from "./ChartLogic/ChartPaper";
import { ChartContext } from "./ChartLogic/ChartContext";

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
              <ChartPaperComponent {...acc} />
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

const ChartPaperComponent = React.memo((props: ChartAccessor) => (
  <ChartContext.Provider value={props}>
    <ChartPaper />
  </ChartContext.Provider>
));
