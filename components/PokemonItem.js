import { Box, Grid, Card, CardContent, Typography, Stack } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import PokemonHeader from "./PokemonHeader";

const CardStyled = styled(Card)`
  text-align: center;
  position: relative;
  overflow: visible;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: -2%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  padding: 0.25rem;
  width: 125px;
  height: 125px;
`;

const ImageBorder = styled.div`
  // background: white;
  border-radius: 100%;
  padding: 0.2rem;
  width: 100%;
  height: 100%;

  img {
    display: block;
    background: translate;
    border-radius: 100%;
    padding: 3px;
    margin: 0;
    width: 100%;
    height: 100%;
  }
`;

const PokemonItem = ({ pokemon, index, selectedPokemon }) => {
  return (
    <>
      <CardStyled
        sx={{ maxWidth: "100%" }}
        onClick={() => selectedPokemon(pokemon)}
      >
        <CardContent>
          <ImageWrapper>
            <ImageBorder>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </ImageBorder>
          </ImageWrapper>
          <PokemonHeader pokemon={pokemon} index={index} />
        </CardContent>
      </CardStyled>
    </>
  );
};

export default PokemonItem;
