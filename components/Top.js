import { Grid } from "@mui/material";
import styled from "styled-components";

const Top = () => {
  return (
    <>
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Header>Personal Job Tracking App</Header>
      </Grid>
      <hr />
    </>
  );
};

const Header = styled.div`
  font-size: 48px;
  font-weight: 700;
`;

export default Top;
