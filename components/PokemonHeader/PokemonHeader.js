import { Typography } from "@mui/material";
import React from "react";
import { blueGrey } from "@mui/material/colors";
import { padLeadingZeros } from "../../utils/number";
import { BoxStyled, TypesTagWrapper, TypeTag } from "./PokemonHeader.styled";

export const POKEMON_TYPES = {
  NORMAL: "NORMAL",
  FIRE: "FIRE",
  WATER: "WATER",
  GRASS: "GRASS",
  ELECTRIC: "ELECTRIC",
  ICE: "ICE",
  FIGHTING: "FIGHTING",
  POISON: "POISON",
  GROUND: "GROUND",
  FLYING: "FLYING",
  PSYCHIC: "PSYCHIC",
  BUG: "BUG",
  ROCK: "ROCK",
  GHOST: "GHOST",
  DARK: "DARK",
  DRAGON: "DRAGON",
  STEEL: "STEEL",
  FAIRY: "FAIRY",
};

const PokemonHeader = ({ pokemon }) => {
  let tagColor;

  const renderType = (type) => {
    const typeNameUpperCase = type.name.toUpperCase();

    switch (typeNameUpperCase) {
      case POKEMON_TYPES.FIRE:
        tagColor = "#F08030";
        break;
      case POKEMON_TYPES.WATER:
        tagColor = "#6890F0";
        break;
      case POKEMON_TYPES.GRASS:
        tagColor = "#78C850";
        break;
      case POKEMON_TYPES.ELECTRIC:
        tagColor = "#F8D030";
        break;
      case POKEMON_TYPES.ICE:
        tagColor = "#98D8D8";
        break;
      case POKEMON_TYPES.FIGHTING:
        tagColor = "#C03028";
        break;
      case POKEMON_TYPES.POISON:
        tagColor = "#A040A0";
        break;
      case POKEMON_TYPES.GROUND:
        tagColor = "#E0C068";
        break;
      case POKEMON_TYPES.FLYING:
        tagColor = "#A890F0";
        break;
      case POKEMON_TYPES.PSYCHIC:
        tagColor = "#F85888";
        break;
      case POKEMON_TYPES.BUG:
        tagColor = "#A8B820";
        break;
      case POKEMON_TYPES.ROCK:
        tagColor = "#B8A038";
        break;
      case POKEMON_TYPES.GHOST:
        tagColor = "#705898";
        break;
      case POKEMON_TYPES.DARK:
        tagColor = "#705848";
        break;
      case POKEMON_TYPES.DRAGON:
        tagColor = "#7038F8";
        break;
      case POKEMON_TYPES.STEEL:
        tagColor = "#B8B8D0";
        break;
      case POKEMON_TYPES.FAIRY:
        tagColor = "#F0B6BC";
        break;
      default:
        tagColor = "#A8A878";
        break;
    }

    const handleTextColorTypes = () => {
      if (
        typeNameUpperCase === POKEMON_TYPES.FIGHTING ||
        typeNameUpperCase === POKEMON_TYPES.POISON ||
        typeNameUpperCase === POKEMON_TYPES.GHOST ||
        typeNameUpperCase === POKEMON_TYPES.DARK ||
        typeNameUpperCase === POKEMON_TYPES.DRAGON ||
        typeNameUpperCase === POKEMON_TYPES.WATER
      ) {
        return "#fff";
      }
      return "#1a2027";
    };

    return (
      <TypeTag
        key={`${type.name}-${pokemon.id}`}
        backgroundColor={tagColor}
        textColor={handleTextColorTypes}
      >
        {type.name}
      </TypeTag>
    );
  };

  return (
    <BoxStyled mt={4}>
      <Typography variant="subtitle2" component="p" color={blueGrey[200]}>
        <b>#{padLeadingZeros(pokemon.id, 4)}</b>
      </Typography>
      <Typography variant="h6" component="h6">
        <b>{pokemon.name}</b>
      </Typography>
      <TypesTagWrapper direction="row" spacing={0.5} mt={1}>
        {pokemon.types.map(({ type }) => renderType(type))}
      </TypesTagWrapper>
    </BoxStyled>
  );
};

export default PokemonHeader;
