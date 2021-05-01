import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";

export type EditDialogProps = {
  title?: string;
  open: boolean;
  onClickOk: () => void;
  onClickCancel: () => void;
  renderDialogContents: JSX.Element;
};

export const COMPONENT_NAME = "components/EditDialog";

export const EditDialog = ({ title, open, onClickOk, onClickCancel, renderDialogContents }: EditDialogProps) => {
  return (
    <Dialog disableBackdropClick disableEscapeKeyDown maxWidth="xs" aria-labelledby="dialog-title" open={open}>
      {!!title && (
        <DialogTitle id="dialog-title">
          <Typography variant="inherit">{title}</Typography>
        </DialogTitle>
      )}
      <DialogContent dividers>{renderDialogContents}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClickCancel} color="default">
          <Typography>Cancel</Typography>
        </Button>
        <Button onClick={onClickOk} color="secondary">
          <Typography>OK</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
