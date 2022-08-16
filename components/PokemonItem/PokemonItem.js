import { CardContent } from "@mui/material";
import React from "react";
import PokemonHeader from "../PokemonHeader/PokemonHeader";
import { CardStyled, ImageBorder, ImageWrapper } from "./PokemonItem.styled";

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
