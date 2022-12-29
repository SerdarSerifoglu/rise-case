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

const JobForm = () => {
  const [jobPriority, setJobPriority] = useState("");
  const handleChange = (e) => {
    setJobPriority(e.target.value);
  };

  return (
    <>
      <Title text="Create New Job" />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Job Name"
              variant="outlined"
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={jobPriority}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="Acil">Acil</MenuItem>
              <MenuItem value="Önemli">Önemli</MenuItem>
              <MenuItem value="Normal">Normal</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container item xs={2} alignItems="center">
          <Button variant="contained" size="large">
            + CREATE
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default JobForm;
