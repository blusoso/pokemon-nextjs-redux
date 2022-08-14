import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import {
  fetchAllNextPokemon,
  fetchNextPokemon,
  selectPokemonProfiles,
} from "../store/pokemon/pokemonSlice";
import PokemonItem from "./PokemonItem";
import PokemonModal from "./PokemonModal";
import LoadingButton from "@mui/lab/LoadingButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PokemonList = ({ pokemonPerRow }) => {
  const dispatch = useDispatch();
  const pokemonProfileList = useSelector(selectPokemonProfiles);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectedPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsOpen(true);
  };

  const loadMore = async () => {
    setIsLoading(true);
    await dispatch(fetchNextPokemon());
    await dispatch(fetchAllNextPokemon());
    setIsLoading(false);
  };
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
            {pokemonProfileList.length > 0 &&
              pokemonProfileList.map((pokemon, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={12 / pokemonPerRow}
                  key={pokemon.name}
                >
                  <PokemonItem
                    pokemon={pokemon}
                    index={index}
                    selectedPokemon={handleSelectedPokemon}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4}>
          <LoadingButton
            variant="outlined"
            color="primary"
            onClick={loadMore}
            loading={isLoading}
            endIcon={<ExpandMoreIcon />}
            loadingPosition="end"
            disabled={isLoading}
          >
            more
          </LoadingButton>
        </Box>
      </Box>
    </>
  );
};

export default PokemonList;
