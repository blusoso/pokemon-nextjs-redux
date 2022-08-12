import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATE_STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
};

const initialState = {
  allPokemon: [],
  pokemon: [],
  status: STATE_STATUS.IDLE,
  error: null,
};

const BASE_POKEMON_URL = "https://pokeapi.co/api/v2";

export const fetchAllPokemon = createAsyncThunk(
  "pokemon/fetchAllPokemon",
  async () => {
    const { data } = await axios.get(`${BASE_POKEMON_URL}/pokemon/?limit=20`);
    const results = data.results;
    const promisesArray = results.map((result) =>
      axios.get(result.url).then((res) => res.data)
    );

    return Promise.all(promisesArray);
  }
);

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (initialPokemon) => {
    // const { data } = await axios.get(
    //   `${BASE_POKEMON_URL}/${initialPokemon.pokemonName}`
    // );

    // return data;
    console.log("fetchPokemon", allPokemon);
  }
);

const pokemon = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllPokemon.pending, (state) => {
        state.status = STATE_STATUS.LOADING;
      })
      .addCase(fetchAllPokemon.fulfilled, (state, action) => {
        state.status = STATE_STATUS.SUCCEEDED;
        state.allPokemon = state.allPokemon.concat(action.payload);
      })
      .addCase(fetchAllPokemon.rejected, (state, action) => {
        state.status = STATE_STATUS.FAILED;
        state.error = action.error.message;
      })
      .addCase(fetchPokemon.pending, (state, action) => {
        console.log("fetchPokemon");
        state.status = STATE_STATUS.LOADING;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = STATE_STATUS.SUCCEEDED;
        state.pokemon = state.pokemon.push("xx");
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = STATE_STATUS.FAILED;
        state.error = action.error.message;
      });
  },
});

// export const selectPokemon = (state) =>
//   state.pokemon.pokemon.length > 0 ? state.pokemon.pokemon[0].results : [];
export const selectAllPokemon = (state) => state.pokemon.allPokemon;
export const selectPokemon = (state) => state.pokemon.pokemon;
export const getPokemonStatus = (state) => state.pokemon.status;
export const getPokemonError = (state) => state.pokemon.error;

export default pokemon.reducer;
