import Title from "./Title";
import {
  MenuItem,
  Select,
  TextField,
  Button,
  InputLabel,
  FormControl,
  Grid,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addJob, priorities } from "../redux/jobList/jobListSlice";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@mui/icons-material/Add";

const JobForm = () => {
  const dispatch = useDispatch();

  const allPriorities = useSelector(priorities);

  const [jobName, setJobName] = useState("");
  const [jobNameErrorMessage, setJobNameErrorMessage] = useState("");

  const [jobPriority, setJobPriority] = useState("");

  const jobNameChangeEvent = (e) => {
    if (e.target.value.length > 255) {
      setJobNameErrorMessage("255 karakterden fazla içerik girilemez!");
    } else {
      setJobName(e.target.value);
      if (jobNameErrorMessage != "") {
        setJobNameErrorMessage("");
      }
    }
  };

  const handleChange = (e) => {
    setJobPriority(e.target.value);
  };

  const buttonClickEvent = async () => {
    if (jobName === "" || jobPriority === "") {
      alert("Job name or Job Priority fields cannot be empty");
      return;
    }
    await dispatch(addJob({ uid: uuidv4(), jobName, jobPriority }));
  };

  return (
    <>
      <Title text="Create New Job" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <FormControl fullWidth>
            <TextField
              error={jobNameErrorMessage != "" ? true : false}
              label="Job Name"
              variant="outlined"
              value={jobName}
              onChange={jobNameChangeEvent}
              helperText={jobNameErrorMessage}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={2.5}>
          <FormControl fullWidth>
            <InputLabel id="job-priorty">Job Priority</InputLabel>
            <Select
              labelId="job-priorty"
              value={jobPriority}
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
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={1.5}
          display="flex"
          alignItems="center"
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => buttonClickEvent()}
          >
            <AddIcon /> CREATE
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default JobForm;
