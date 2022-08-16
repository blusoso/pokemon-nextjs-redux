import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import {
  fetchAllNextPokemon,
  fetchNextPokemon,
  getPokemonStatus,
  selectFilteredPokemon,
  selectPokemonProfiles,
  STATE_STATUS,
} from "../../store/pokemon/pokemonSlice";
import PokemonItem from "../PokemonItem/PokemonItem";
import PokemonModal from "../Modal/PokemonModal";
import LoadingButton from "@mui/lab/LoadingButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SkeletonPokemonItem from "../Skeleton/SkeletonPokemonItem/SkeletonPokemonItem";

const PokemonList = ({ pokemonPerRow, limitPerPage }) => {
  const dispatch = useDispatch();
  const pokemonProfileList = useSelector(selectPokemonProfiles);
  const filteredPokemon = useSelector(selectFilteredPokemon);
  const pokemonStatus = useSelector(getPokemonStatus);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const renderedPokemonList = filteredPokemon || pokemonProfileList;

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

      <Box sx={{ flexGrow: 1, my: 6 }}>
        <Grid container>
          <Grid container rowSpacing={10} columnSpacing={4}>
            {renderedPokemonList.length > 0 &&
              renderedPokemonList.map((pokemon, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={12 / pokemonPerRow}
                  key={pokemon.name}
                >
                  {pokemonStatus === STATE_STATUS.LOADING ? (
                    <SkeletonPokemonItem />
                  ) : (
                    <PokemonItem
                      pokemon={pokemon}
                      index={index}
                      selectedPokemon={handleSelectedPokemon}
                    />
                  )}
                </Grid>
              ))}
          </Grid>
        </Grid>
        {renderedPokemonList.length >= limitPerPage && (
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
        )}
      </Box>
    </>
  );
};

export default PokemonList;
