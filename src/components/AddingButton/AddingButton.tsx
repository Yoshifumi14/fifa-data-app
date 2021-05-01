import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles, createStyles, Theme, fade } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export const COMPONENT_NAME = "components/AddingButtton";

export type AddingButtonProps = {
  onClick: () => void;
};

export const AddingButton = ({ onClick }: AddingButtonProps) => {
  const classes = useStyles();
  return (
    <Paper elevation={1} variant="outlined" className={classes.paper}>
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <Button onClick={onClick} className={classes.button}>
          <AddIcon fontSize="large" color="primary" />
        </Button>
      </Box>
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: 350,
      height: 350,
      background: fade(theme.palette.background.paper, 0.7),
      border: "dashed",
      borderWidth: 2,
      borderColor: theme.palette.divider,
    },
    button: {
      width: "100%",
      height: "100%",
    },
  })
);
