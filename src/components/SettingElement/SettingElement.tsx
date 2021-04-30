import React from "react";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import ListItemText from "@material-ui/core/ListItemText";

export type SettingElementProps = {
  title: string;
  description?: string;
};

export const COMPONENT_NAME = "components/SettingElement";

export const SettingElement = ({ title, description, children }: React.PropsWithChildren<SettingElementProps>) => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center" p={1} className={classes.contentElement}>
      <Box flexGrow={1}>
        <ListItemText primary={title} secondary={description ? description : null} />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentElement: {
      margin: theme.spacing(1),
    },
  })
);
