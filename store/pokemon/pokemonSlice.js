import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { stringCapitalize } from "../../utils/text";

export const STATE_STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
};

const initialState = {
  pokemon: [],
  allPokemon: [],
  allPokemonProfiles: [],
  pokemonNameList: [],
  pokemonProfiles: [],
  nextPokemon: [],
  allNextPokemon: [],
  pokemonCount: 0,
  status: STATE_STATUS.IDLE,
  error: null,
};

const BASE_POKEMON_URL = "https://pokeapi.co/api/v2";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async ({ limit }) => {
    const { data } = await axios.get(
      `${BASE_POKEMON_URL}/pokemon/?limit=${limit}`
    );

    return data;
  }
);

export const fetchAllPokemon = createAsyncThunk(
  "pokemon/fetchAllPokemon",
  async (_, { getState }) => {
    const count = selectPokemonCount(getState());

    const { data } = await axios.get(
      `${BASE_POKEMON_URL}/pokemon/?limit=${count}`
    );

    return data;
  }
);

export const fetchAllPokemonProfile = createAsyncThunk(
  "pokemon/fetchAllPokemonProfile",
  async (_, { getState }) => {
    const allPokemonArr = selectAllPokemon(getState());
    const results = allPokemonArr.results;
    const promisesArray = results.map((result) =>
      axios.get(result.url).then((res) => res.data)
    );

    return Promise.all(promisesArray);
  }
);

// export const fetchPokemonName = createAsyncThunk(
//   "pokemon/fetchPokemonName",
//   async (_, { getState }) => {
//     const count = selectPokemonCount(getState());

//     const { data } = await axios.get(
//       `${BASE_POKEMON_URL}/pokemon/?limit=${count}`
//     );

//     const nameList = data.results.map((result) =>
//       stringCapitalize(result.name)
//     );

//     return nameList;
//   }
// );

export const fetchPokemonProfile = createAsyncThunk(
  "pokemon/fetchPokemonProfile",
  async (_, { getState }) => {
    const pokemonArr = selectPokemon(getState());
    const results = pokemonArr[0].results;
    const promisesArray = results.map((result) =>
      axios.get(result.url).then((res) => res.data)
    );

    return Promise.all(promisesArray);
  }
);

export const fetchNextPokemon = createAsyncThunk(
  "pokemon/fetchNextPokemon",
  async (_, { getState }) => {
    const pokemonArr = selectPokemon(getState());
    const nextPokemonUrl = pokemonArr[0].next;
    const { data } = await axios.get(nextPokemonUrl);

    return data;
  }
);

export const fetchAllNextPokemon = createAsyncThunk(
  "pokemon/fetchAllNextPokemon",
  async (_, { getState }) => {
    const nextPokemonArr = selectPokemon(getState());
    const results = nextPokemonArr[0].results;
    const promisesArray = results.map((result) =>
      axios.get(result.url).then((res) => res.data)
    );

    return Promise.all(promisesArray);
  }
);

const pokemon = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.status = STATE_STATUS.LOADING;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = STATE_STATUS.SUCCEEDED;
        state.pokemon = state.pokemon.concat(action.payload);
        state.pokemonCount = state.pokemon[0].count;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = STATE_STATUS.FAILED;
        state.error = action.error.message;
      })
      .addCase(fetchAllPokemon.pending, (state) => {
        state.status = STATE_STATUS.LOADING;
      })
      .addCase(fetchAllPokemon.fulfilled, (state, action) => {
        state.status = STATE_STATUS.SUCCEEDED;
        state.allPokemon = action.payload;
        const nameList = action.payload.results.map((result) =>
          stringCapitalize(result.name)
        );
        state.pokemonNameList = nameList;
      })
      .addCase(fetchAllPokemon.rejected, (state, action) => {
        state.status = STATE_STATUS.FAILED;
        state.error = action.error.message;
      })
      .addCase(fetchAllPokemonProfile.pending, (state) => {
        state.status = STATE_STATUS.LOADING;
      })
      .addCase(fetchAllPokemonProfile.fulfilled, (state, action) => {
        state.status = STATE_STATUS.SUCCEEDED;
        console.log(action.payload);
        state.allPokemonProfiles = state.allPokemonProfiles.concat(
          action.payload
        );
      })
      .addCase(fetchAllPokemonProfile.rejected, (state, action) => {
        state.status = STATE_STATUS.FAILED;
        state.error = action.error.message;
      })
      // .addCase(fetchPokemonName.pending, (state) => {
      //   state.status = STATE_STATUS.LOADING;
      // })
      // .addCase(fetchPokemonName.fulfilled, (state, action) => {
      //   state.status = STATE_STATUS.SUCCEEDED;
      //   state.pokemonNameList = action.payload;
      // })
      // .addCase(fetchPokemonName.rejected, (state, action) => {
      //   state.status = STATE_STATUS.FAILED;
      //   state.error = action.error.message;
      // })
      .addCase(fetchPokemonProfile.pending, (state) => {
        state.status = STATE_STATUS.LOADING;
      })
      .addCase(fetchPokemonProfile.fulfilled, (state, action) => {
        state.status = STATE_STATUS.SUCCEEDED;
        state.pokemonProfiles = state.pokemonProfiles.concat(action.payload);
      })
      .addCase(fetchPokemonProfile.rejected, (state, action) => {
        state.status = STATE_STATUS.FAILED;
        state.error = action.error.message;
      })
      .addCase(fetchNextPokemon.fulfilled, (state, action) => {
        state.status = STATE_STATUS.SUCCEEDED;
        state.pokemon[0] = action.payload;
      })
      .addCase(fetchAllNextPokemon.pending, (state) => {
        state.status = STATE_STATUS.LOADING;
      })
      .addCase(fetchAllNextPokemon.fulfilled, (state, action) => {
        state.status = STATE_STATUS.SUCCEEDED;
        state.pokemonProfiles = state.pokemonProfiles.concat(action.payload);
      })
      .addCase(fetchAllNextPokemon.rejected, (state, action) => {
        state.status = STATE_STATUS.FAILED;
        state.error = action.error.message;
      });
  },
});

export const selectPokemonProfiles = (state) => state.pokemon.pokemonProfiles;
export const selectPokemon = (state) => state.pokemon.pokemon;
export const selectAllPokemon = (state) => state.pokemon.allPokemon;
export const selectAllPokemonProfiles = (state) =>
  state.pokemon.allPokemonProfiles;
export const selectPokemonNameList = (state) => state.pokemon.pokemonNameList;
export const selectNextPokemon = (state) => state.pokemon.nextPokemon;
export const selectAllNextPokemon = (state) => state.pokemon.allNextPokemon;
export const selectPokemonCount = (state) => state.pokemon.pokemonCount;
export const getPokemonStatus = (state) => state.pokemon.status;
export const getPokemonError = (state) => state.pokemon.error;

export default pokemon.reducer;
