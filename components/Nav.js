import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import Link from "next/link";
import React from "react";
import CabinIcon from "@mui/icons-material/Cabin";
import PetsIcon from "@mui/icons-material/Pets";
import FeedIcon from "@mui/icons-material/Feed";
import styled from "styled-components";
import { red, orange, blueGrey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";

const pages = [
  { name: "Home", icon: <CabinIcon />, isActive: false },
  { name: "Pokédex", icon: <PetsIcon />, isActive: true },
  { name: "News", icon: <FeedIcon />, isActive: false },
];

const ButtonStyled = styled(Button)`
  color: ${({ isNavActive, theme }) =>
    isNavActive ? theme.palette.primary.main : blueGrey[300]};
`;

const Nav = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ maxWidth: "100%" }}>
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <ButtonStyled
                key={page.name}
                startIcon={page.icon}
                isNavActive={page.isActive}
                theme={theme}
                sx={{
                  display: "flex",
                  textTransform: "capitalize",
                  padding: "1em",
                  margin: "0.2em",
                  alignItems: "center",
                }}
              >
                {page.name}
              </ButtonStyled>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
