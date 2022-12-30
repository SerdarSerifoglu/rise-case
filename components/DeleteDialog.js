import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { deleteJobByUID } from "../redux/jobList/jobListSlice";
import styled from "styled-components";

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
            &quot;{rowData.jobName}&quot; will be deleted !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonStyleCancel bcolor="#DDDDDD" onClick={handleClose}>
            CANCEL
          </ButtonStyleCancel>
          <ButtonStyleSuccess
            bcolor="#F05454"
            onClick={async () => {
              await dispatch(deleteJobByUID(rowData.uid));
              handleClose();
            }}
            autoFocus
          >
            APPROVE
          </ButtonStyleSuccess>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const ButtonStyleSuccess = styled(Button)`
  background-color: ${(props) => props.bcolor};
  color: white;
  :hover {
    background-color: #dc0000;
  }
`;
const ButtonStyleCancel = styled(Button)`
  background-color: ${(props) => props.bcolor};
  color: black;
  :hover {
    background-color: #b2b2b2;
  }
`;
