import { Grid } from "@mui/material";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <hr />
      <GridWrapper container>
        <GithubRepo
          item
          xs={12}
          md={6}
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <LinkStyle
            target="_blank"
            href="https://github.com/SerdarSerifoglu/rise-case"
          >
            Github Repository
          </LinkStyle>
        </GithubRepo>
        <PersonalInfo
          item
          xs={12}
          md={6}
          display="flex"
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <LinkStyle
            target="_blank"
            href="https://www.linkedin.com/in/omer-serdar-serifoglu/"
          >
            2023 - Ömer Serdar Şerifoğlu
          </LinkStyle>
        </PersonalInfo>
      </GridWrapper>
    </>
  );
};

const GridWrapper = styled(Grid)`
  height: auto;
  line-height: 64px;
  background-color: #dddddd;
`;

const LinkStyle = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 700;
`;
const GithubRepo = styled(Grid)`
  padding-left: 10px;
`;
const PersonalInfo = styled(Grid)`
  padding-right: 10px;
`;

export default Footer;
