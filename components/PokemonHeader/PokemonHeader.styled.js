import { Box, Stack } from "@mui/material";
import styled from "styled-components";

export const TypesTagWrapper = styled(Stack)`
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.8em;
`;

export const TypeTag = styled.div`
  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  padding: 2px 8px;
  border-radius: 6px;
  font-weight: 600;
`;

export const BoxStyled = styled(Box)`
  text-align: center;
  text-transform: capitalize;
`;
