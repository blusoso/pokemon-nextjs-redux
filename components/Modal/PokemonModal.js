import { IconButton } from "@mui/material";
import React, { useState } from "react";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import CloseIcon from "@mui/icons-material/Close";
import PokemonDetail from "../PokemonDetail/pokemonDetail";
import {
  CloseIconStyle,
  CloseIconWrapper,
  IconWrapper,
  ImageWrapper,
  ModalContainer,
  ModalStyled,
} from "./PokemonModal.styled";

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
