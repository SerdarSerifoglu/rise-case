import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useDispatch, useSelector } from "react-redux";
import { updateJobByUID } from "../redux/jobList/jobListSlice";
import {
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { useState, useEffect } from "react";
import { priorities } from "../redux/jobList/jobListSlice";
import styled from "styled-components";

export default function UpdateDialog(props) {
  const dispatch = useDispatch();
  const allPriorities = useSelector(priorities);
  let { state, setState, rowData } = props;

  useEffect(() => {
    setJobPriority(rowData.jobPriority);
  }, [rowData]);

  const handleClose = () => {
    setState(false);
  };

  const [jobPriority, setJobPriority] = useState(rowData.jobPriority);

  const handleChange = (e) => {
    setJobPriority(e.target.value);
  };

  return (
    jobPriority && (
      <div>
        <Dialog
          open={state}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title-test"
        >
          <DialogTitle id="alert-dialog-title-test">Job Edit</DialogTitle>
          <DialogContentStyle>
            <br />
            <FormControl fullWidth>
              <TextField
                disabled
                label="Job Name"
                value={rowData.jobName}
              ></TextField>
            </FormControl>
            <br />
            <br />
            <FormControl fullWidth>
              <InputLabel id="job-priorty">Job Priority</InputLabel>
              <Select
                labelId="job-priorty"
                value={jobPriority}
                defaultValue={jobPriority}
                label="Job Priority"
                onChange={handleChange}
              >
                {allPriorities.map((e, i) => (
                  <MenuItem key={i} value={e.id}>
                    {e.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </DialogContentStyle>
          <DialogActions>
            <Button onClick={handleClose}>CANCEL</Button>
            <Button
              onClick={async () => {
                await dispatch(
                  updateJobByUID({
                    uid: rowData.uid,
                    updateDataPart: { jobPriority: jobPriority },
                  })
                );
                handleClose();
              }}
              autoFocus
            >
              UPDATE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  );
}

const DialogContentStyle = styled(DialogContent)`
  width: 260px;
  height: 25vh;
`;
