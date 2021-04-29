import React from "react";
import { AppLayout } from "../components/Layout";
import Button from "@material-ui/core/Button";

export const App = () => {
  const [open, setOpen] = React.useState(false);
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
    </AppLayout>
  );
};
