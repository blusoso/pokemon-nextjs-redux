import React, { useState } from "react";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchByPokemonName } from "../store/pokemon/pokemonSlice";
import { useDispatch } from "react-redux";

const SearchPokemon = ({ pokemonNameList }) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const clearSearchValue = () => {
    setSearchValue("");
    dispatch(searchByPokemonName({ name: undefined }));
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={10} sm={11}>
          <Autocomplete
            value={searchValue}
            onChange={(_, newValue) => setSearchValue(newValue)}
            disablePortal
            options={pokemonNameList}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="Search a Pokémon Name!"
                sx={{ textTransform: "capitalize" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={2} sm={1}>
          <Button
            variant="primary"
            sx={{
              minWidth: 0,
              width: "100%",
              height: "100%",
            }}
            onClick={() => dispatch(searchByPokemonName({ name: searchValue }))}
          >
            <SearchIcon fontSize="small" />
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ textAlign: "right", marginTop: "0.3em" }}>
        <Grid item xs={10} md={11}>
          <Button variant="textLink" onClick={clearSearchValue}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchPokemon;
