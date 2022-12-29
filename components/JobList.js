import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import Title from "./Title";

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
