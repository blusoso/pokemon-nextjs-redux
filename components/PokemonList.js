import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import {
  fetchAllPokemon,
  fetchPokemon,
  getPokemonError,
  getPokemonStatus,
  selectAllPokemon,
  selectPokemon,
  STATE_STATUS,
} from "../store/pokemon/pokemonSlice";
import PokemonItem from "./PokemonItem";
import PokemonModal from "./PokemonModal";

const PokemonList = () => {
  const dispatch = useDispatch();
  const allPokemonList = useSelector(selectAllPokemon);
  const pokemonList = useSelector(selectPokemon);
  const pokemonStatus = useSelector(getPokemonStatus);
  const error = useSelector(getPokemonError);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState();

  useEffect(() => {
    if (pokemonStatus === STATE_STATUS.IDLE) {
      dispatch(fetchAllPokemon());
      dispatch(fetchPokemon());
    }
  }, [pokemonStatus, dispatch]);

  const handleSelectedPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsOpen(true);
  };

  console.log(allPokemonList);

  return (
    <>
      {selectedPokemon && (
        <PokemonModal
          isOpen={isOpen}
          pokemon={selectedPokemon}
          onClose={() => setIsOpen(false)}
        />
      )}

      <Box sx={{ flexGrow: 1, my: 10 }}>
        <Grid container>
          <Grid container rowSpacing={10} columnSpacing={4}>
            {allPokemonList.length > 0 &&
              allPokemonList.map((pokemon, index) => (
                <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
                  <PokemonItem
                    pokemon={pokemon}
                    index={index}
                    selectedPokemon={handleSelectedPokemon}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PokemonList;
