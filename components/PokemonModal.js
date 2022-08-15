import { Box, Modal, IconButton } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import CloseIcon from "@mui/icons-material/Close";
import PokemonDetail from "./pokemonDetail";

const BORDER_RADIUS = "16px";

const ModalStyled = styled(Modal)`
  margin-top: 2em;
`;

const ModalContainer = styled(Box)`
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

const ImageWrapper = styled.div`
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

const IconWrapper = styled.div`
  position: absolute;
  top: 0.7em;
  right: 0.8em;
`;

const CloseIconWrapper = styled.div`
  position: absolute;
  top: -2.3em;
  right: 0.2em;
  cursor: pointer;
`;

const CloseIconStyle = styled.div`
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

const GENDER = {
  MALE: "male",
  FEMALE: "female",
};

const PokemonModal = ({ isOpen, pokemon, index, onClose }) => {
  const [selectedGender, setSelectedGender] = useState(GENDER.MALE);

  const clearValue = () => {
    setSelectedGender(GENDER.MALE);
  };

  const handleClose = () => {
    clearValue();
    onClose();
  };

  return (
    <ModalStyled
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleClose}
    >
      <ModalContainer>
        <CloseIconWrapper onClick={handleClose}>
          <CloseIconStyle>
            <CloseIcon />
          </CloseIconStyle>
        </CloseIconWrapper>
        <ImageWrapper>
          <img
            src={
              selectedGender === GENDER.MALE
                ? pokemon.sprites.front_default
                : pokemon.sprites.front_female || pokemon.sprites.front_default
            }
            alt={pokemon.name}
          />
        </ImageWrapper>
        <IconWrapper>
          <IconButton
            size="small"
            color={selectedGender === GENDER.MALE ? "info" : "default"}
            onClick={() => setSelectedGender(GENDER.MALE)}
          >
            <MaleIcon />
          </IconButton>
          <IconButton
            size="small"
            color={selectedGender === GENDER.FEMALE ? "error" : "default"}
            onClick={() => setSelectedGender(GENDER.FEMALE)}
          >
            <FemaleIcon />
          </IconButton>
        </IconWrapper>
        <PokemonDetail pokemon={pokemon} index={index} />
      </ModalContainer>
    </ModalStyled>
  );
};

export default PokemonModal;
