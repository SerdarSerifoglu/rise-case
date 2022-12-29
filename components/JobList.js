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
} from "@mui/material";
import styled from "styled-components";
import Title from "./Title";
import SearchIcon from "@mui/icons-material/Search";
const jobListData = [
  {
    name: "Task yapılacak",
    priority: "Acil",
  },
  {
    name: "Tasarım yapılacak",
    priority: "Önemli",
  },
  {
    name: "Canlıya çık",
    priority: "Önemli",
  },
];

const JobList = () => {
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
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobListData.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">
                  <CellWrapper>
                    <ColorCell>{row.priority}</ColorCell>
                  </CellWrapper>
                </TableCell>
                <TableCell>{/* Butonlar Gelecek */}</TableCell>
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

export default JobList;
