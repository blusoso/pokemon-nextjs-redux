import { AppBar, Box, Container, Toolbar } from "@mui/material";
import React from "react";
import CabinIcon from "@mui/icons-material/Cabin";
import PetsIcon from "@mui/icons-material/Pets";
import FeedIcon from "@mui/icons-material/Feed";
import { useTheme } from "@mui/material/styles";
import { ButtonStyled } from "./Nav.styled";

const pages = [
  { name: "Home", icon: <CabinIcon />, isActive: false },
  { name: "Pokédex", icon: <PetsIcon />, isActive: true },
  { name: "News", icon: <FeedIcon />, isActive: false },
];

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
