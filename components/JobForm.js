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
import { addJob } from "../redux/jobList/jobListSlice";
import { v4 as uuidv4 } from "uuid";

const JobForm = () => {
  const dispatch = useDispatch();

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
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={jobPriority}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={1}>Acil</MenuItem>
              <MenuItem value={2}>Önemli</MenuItem>
              <MenuItem value={3}>Normal</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container item xs={12} md={1.5} alignItems="center">
          <Button
            variant="contained"
            size="large"
            onClick={() => buttonClickEvent()}
          >
            + CREATE
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default JobForm;
