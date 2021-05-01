import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CircularProgress from "@material-ui/core/CircularProgress";

export type PaperContainerProps = {
  title: string;
  onDelete: () => void;
  onEdit: () => void;
  isLoading?: boolean;
};

export const COMPONENT_NAME = "components/PaperContainer";

export const PaperContainer = ({
  title,
  onDelete,
  onEdit,
  children,
  isLoading = false,
}: React.PropsWithChildren<PaperContainerProps>) => {
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
        {isLoading ? (
          <Box display="flex" justifyContent="center" alignItems="center" width={300} height={280}>
            <CircularProgress size={80} />
          </Box>
        ) : (
          children
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
