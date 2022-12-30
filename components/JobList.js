import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  TextField,
  InputAdornment,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import styled from "styled-components";
import Title from "./Title";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  priorities,
  updateJobListFilter,
  clearJobListFilter,
} from "../redux/jobList/jobListSlice";

const JobList = ({ listData }) => {
  const dispatch = useDispatch();
  const allPriorities = useSelector(priorities);

  const [jobPriority, setJobPriority] = useState("");

  const [jobNameFilter, setJobNameFilter] = useState("");

  const jobNameChangeEvent = async (e) => {
    setJobNameFilter(e.target.value);
    await dispatch(updateJobListFilter({ key: "name", value: e.target.value }));
  };

  const jobPriorityChangeEvent = async (e) => {
    setJobPriority(e.target.value);
    await dispatch(
      updateJobListFilter({ key: "priority", value: e.target.value })
    );
  };

  const filterClearEvent = async () => {
    setJobNameFilter("");
    setJobPriority("");
    await dispatch(clearJobListFilter());
  };

  return (
    <>
      <Title text="Job List" />

      <FilterGrid container spacing={2}>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            label="Job Name"
            value={jobNameFilter}
            onChange={jobNameChangeEvent}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={10} md={3}>
          <FormControl fullWidth>
            <InputLabel id="job-priorty">Job Priority</InputLabel>
            <Select
              labelId="job-priorty"
              value={jobPriority}
              label="Job Priority"
              onChange={jobPriorityChangeEvent}
            >
              {allPriorities.map((e, i) => (
                <MenuItem key={i} value={e.id}>
                  {e.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid container item xs={2} md={1}>
          <Button
            variant="outlined"
            size="large"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={filterClearEvent}
          >
            <SearchOffIcon />
          </Button>
        </Grid>
      </FilterGrid>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHeadStyle>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Priority</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHeadStyle>
          <TableBody>
            {listData.map((row, index) => (
              <TableRow
                key={row.uid}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.jobName}
                </TableCell>
                <TableCell align="center">
                  <CellWrapper>
                    <ColorCell
                      bc={
                        allPriorities.find((x) => x.id == row.jobPriority).color
                      }
                    >
                      {allPriorities.find((x) => x.id == row.jobPriority).name}
                    </ColorCell>
                  </CellWrapper>
                </TableCell>
                <TableCell align="center">
                  <ActionButton>
                    <EditIcon />
                  </ActionButton>
                  <ActionButton hoverBC="red">
                    <DeleteIcon />
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const ColorCell = styled.div`
  background-color: ${(props) => props.bc};
  color: white;
  max-width: min-content;
  padding: 3px 10px;
  border-radius: 5px;
`;

const CellWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ActionButton = styled(Button)`
  width: min-content;
  background-color: gray;
  color: white;
  margin-right: 1%;

  :hover {
    background-color: ${(props) => (props.hoverBC ? props.hoverBC : "black")};
  }
`;

const FilterGrid = styled(Grid)`
  background-color: #f8f4ea;
  padding-bottom: 1%;
`;

const TableHeadStyle = styled(TableHead)`
  background-color: #e1d7c6;
`;

export default JobList;
