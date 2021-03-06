import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme, Theme, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as GitHubIcon } from "./img/iconmonstr-github-1.svg";

export type AppLayoutProps = {
  appBarTitle: string;
  drawerOpen: boolean;
  handleDrawerClose: () => void;
  drawerContents: {
    headerTitle: string;
    body: JSX.Element;
  };
};

export const COMPONENT_NAME = "components/AppLayout";

export const AppLayout = ({
  appBarTitle,
  drawerOpen,
  handleDrawerClose,
  drawerContents,
  children,
}: React.PropsWithChildren<AppLayoutProps>) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            href="https://github.com/Yoshifumi14/fifa-data-app"
            target="_blank"
            rel="noreferrer"
          >
            <SvgIcon>
              <GitHubIcon />
            </SvgIcon>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {appBarTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Typography>{drawerContents.headerTitle}</Typography>
        </div>
        <Divider />
        <div className={classes.drawerContents}>{drawerContents.body}</div>
      </Drawer>
    </div>
  );
};

const DRAWER_WIDTH = 350;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: DRAWER_WIDTH,
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
    },
    drawerContents: {
      padding: theme.spacing(2),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -DRAWER_WIDTH,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  })
);
