import { Button } from "@mui/material";
import styled from "styled-components";
import { blueGrey } from "@mui/material/colors";

export const ButtonStyled = styled(Button)`
  color: ${({ isNavActive, theme }) =>
    isNavActive ? theme.palette.primary.main : blueGrey[300]};
`;
