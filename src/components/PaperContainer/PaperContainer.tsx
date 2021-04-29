import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CircularProgress from "@material-ui/core/CircularProgress";

export type PaperContainerProps = {
  title: string;
  onDelete: () => void;
  onEdit: () => void;
  renderContents: JSX.Element;
  isLoaDing?: boolean;
};

export const COMPONENT_NAME = "components/PaperContainer";

export const PaperContainer = ({ title, onDelete, onEdit, renderContents, isLoaDing = false }: PaperContainerProps) => {
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.paper}>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item xs={1}>
          <IconButton onClick={onEdit} size="small">
            <MoreHorizIcon />
          </IconButton>
        </Grid>
        <Grid item xs={10}>
          <Typography className={classes.title} variant="body1">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton edge="end" onClick={onDelete} size="small">
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center">
        {isLoaDing ? (
          <Box display="flex" justifyContent="center" alignItems="center" width={300} height={280}>
            <CircularProgress size={80} />
          </Box>
        ) : (
          renderContents
        )}
      </Box>
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: 350,
      height: 350,
      padding: theme.spacing(2),
    },
    title: {
      textAlign: "center",
    },
  })
);
