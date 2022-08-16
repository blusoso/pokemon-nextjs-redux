import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

const BORDER_RADIUS = "16px";

export const ModalStyled = styled(Modal)`
  margin-top: 2em;
`;

export const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  background-color: white;
  padding: 2em;
  border-radius: ${BORDER_RADIUS};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 430px) {
    padding: 1em;
    width: 90%;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -2%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  padding: 0.25rem;
  width: 150px;
  height: 150px;

  img {
    display: block;
    border-radius: 100%;
    padding: 3px;
    margin: 0;
    width: 100%;
    height: 100%;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 0.7em;
  right: 0.8em;
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: -2.3em;
  right: 0.2em;
  cursor: pointer;
`;

export const CloseIconStyle = styled.div`
  background: rgb(241, 44, 59);
  border-radius: 100%;
  color: white;
  padding: 0.3em;

  svg {
    display: block;
    width: 0.7em;
    height: 0.7em;
  }
`;
