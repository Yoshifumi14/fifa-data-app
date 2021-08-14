import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@material-ui/core/Box";

import { appChartAccessorListSelector, isEditingChartSelector } from "store/slice/app/AppSelector";
import { setEditingChart } from "store/slice/app/App";
import { ChartAccessor } from "store/slice/app/App";
import { AppLayout } from "components/AppLayout";

import { CreateChartDialog } from "./CreateChartDialog";
import { ChartPaper } from "./ChartLogic/ChartPaper";
import { ChartContext } from "./ChartLogic/ChartContext";
import { EditChartDrawer } from "./EditChartDrawer";

export const App = () => {
  const dispatch = useDispatch();
  const isEditingChart = useSelector(isEditingChartSelector);
  const acceccerList = useSelector(appChartAccessorListSelector);
  return (
    <AppLayout
      appBarTitle="FIFA DATA APP"
      drawerContents={{
        headerTitle: "チャートを編集",
        body: <EditChartDrawer />,
      }}
      drawerOpen={isEditingChart}
      handleDrawerClose={() => dispatch(setEditingChart({ editingChart: null }))}
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
