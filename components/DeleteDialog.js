import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { deleteJobByUID } from "../redux/jobList/jobListSlice";

export default function DeleteDialog(props) {
  const dispatch = useDispatch();
  let { state, setState, rowData } = props;

  const handleClose = () => {
    setState(false);
  };

  return (
    <div>
      <Dialog
        open={state}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure want to delete it?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            "{rowData.jobName}" will be deleted !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CANCEL</Button>
          <Button
            onClick={async () => {
              await dispatch(deleteJobByUID(rowData.uid));
              handleClose();
            }}
            autoFocus
          >
            APPROVE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
