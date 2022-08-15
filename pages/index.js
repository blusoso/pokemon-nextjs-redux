import Head from "next/head";
import PokemonList from "../components/PokemonList";
import { Alert, Box, Grid, Snackbar, TextField } from "@mui/material";
import Nav from "../components/Nav";
import styled from "styled-components";
import {
  fetchAllPokemon,
  fetchAllPokemonProfile,
  fetchPokemon,
  fetchPokemonProfile,
  getPokemonError,
  getPokemonStatus,
  selectAllPokemon,
  selectAllPokemonProfiles,
  selectPokemonNameList,
  STATE_STATUS,
} from "../store/pokemon/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchPokemon from "../components/SearchPokemon";
import { Container } from "@mui/system";

const SearchBox = styled(Box)`
  .MuiAutocomplete-popper {
    color: red;
  }
`;

const POKEMON_PER_ROW = 4;
const LIMIT_PER_PAGE = POKEMON_PER_ROW * 5;

export default function Home() {
  const dispatch = useDispatch();
  const pokemonStatus = useSelector(getPokemonStatus);
  const pokemonNameList = useSelector(selectPokemonNameList);
  const allPokemonList = useSelector(selectAllPokemon);
  const allPokemonProfiles = useSelector(selectAllPokemonProfiles);
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const error = useSelector(getPokemonError);

  const fetchData = async () => {
    if (pokemonStatus === STATE_STATUS.IDLE) {
      await dispatch(fetchPokemon({ limit: LIMIT_PER_PAGE }));
      await dispatch(fetchPokemonProfile());
      await dispatch(fetchAllPokemon());
      await dispatch(fetchAllPokemonProfile());
    }
  };

  useEffect(() => {
    fetchData();
  }, [pokemonStatus, dispatch]);

  useEffect(() => {
    if (error) {
      setIsSnackBarOpen(true);
    } else {
      setIsSnackBarOpen(false);
    }
  }, [error]);

  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSnackBarOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Pokémon - Pokédex</title>
        <meta name="description" content="Pokémon - Pokédex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main>
        <Snackbar
          open={isSnackBarOpen}
          autoHideDuration={6000}
          onClose={handleSnackBarClose}
        >
          <Alert
            onClose={handleSnackBarClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            {error}
          </Alert>
        </Snackbar>

        <Container sx={{ marginTop: "2.5em" }}>
          <SearchPokemon
            pokemonNameList={pokemonNameList}
            allPokemonProfiles={allPokemonProfiles}
          />
          <PokemonList
            pokemonPerRow={POKEMON_PER_ROW}
            limitPerPage={LIMIT_PER_PAGE}
          />
        </Container>
      </main>
    </div>
  );
}
