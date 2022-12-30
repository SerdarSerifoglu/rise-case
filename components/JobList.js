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
} from "@mui/material";
import styled from "styled-components";
import Title from "./Title";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const JobList = ({ listData }) => {
  return (
    <>
      <Title text="Job List" />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            label="With normal TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField label="Job Name" variant="outlined" fullWidth />
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Priority</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
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
                    <ColorCell>{row.jobPriority}</ColorCell>
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
  background-color: red;
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
export default JobList;
