import React from "react";
import { AppLayout } from "../components/AppLayout";
import Button from "@material-ui/core/Button";
import { CreateChartDialog } from "./CreateChartDialog";
import { useSelector } from "react-redux";
import { appChartAccessorListSelector } from "../store/slice/app/AppSelector";

export const App = () => {
  const [open, setOpen] = React.useState(false);
  const acceccerList = useSelector(appChartAccessorListSelector);
  return (
    <AppLayout
      appBarTitle="FIFA DATA PLOT"
      drawerContents={{
        headerTitle: "headerTitle",
        body: <div>hoge</div>,
      }}
      drawerOpen={open}
      handleDrawerClose={() => setOpen(false)}
    >
      <h3>App</h3>
      <Button variant="contained" color="primary" onClick={() => setOpen(!open)}>
        Drawer
      </Button>
      <div>
        <CreateChartDialog />
      </div>
      <div>
        {acceccerList.map((acc) => {
          return (
            <p>
              {acc.chartId} / {acc.queryConditionId}
            </p>
          );
        })}
      </div>
    </AppLayout>
  );
};
