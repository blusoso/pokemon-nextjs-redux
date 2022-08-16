import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const BORDER_RADIUS = "12px";
export const BORDER_COLOR = "rgba(0, 0, 0, 0.1)";

export const ProfileBox = styled(Box)`
  border-radius: ${BORDER_RADIUS};
  text-align: center;
  ${({ type }) =>
    type === PROFILE_BOX_TYPE.ABILITY &&
    "display: flex;justify-content: center;align-items: center;min-height: 2.5em;"};

  p {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: ${({ type }) =>
      type === PROFILE_BOX_TYPE.ABILITY ? "0.6em" : "0.9em"};
  }

  svg {
    font-size: 0.9em;
    margin-right: 0.4em;
  }
`;

export const HeaderText = styled(Typography)`
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;

  span {
    font-size: 0.9em;
    font-weight: 600;
    border-radius: 8px;
    margin-left: 0.5em;
  }
`;

export const HrStyled = styled.hr`
  margin: 1.5em 0;
  border-color: ${BORDER_COLOR};
`;

export const StatWrapper = styled.div`
  position: relative;
  border-radius: ${BORDER_RADIUS};
  text-align: center;
  border: 1px solid ${BORDER_COLOR};
  padding: 0.4em 0.3em;
`;

export const StatHeader = styled.div`
  width: 60%;
  font-weight: 600;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  font-size: 1em;

  @media only screen and (max-width: 430px) {
    font-size: 0.9em;
  }
  @media only screen and (max-width: 350px) {
    font-size: 0.75em;
  }
`;

export const StatValue = styled(Typography)`
  margin: 0.4em 0 0.3em 0;
`;
