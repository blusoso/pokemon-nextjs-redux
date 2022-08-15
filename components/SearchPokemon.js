import React, { useState } from "react";
import { Autocomplete, Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchByPokemonName } from "../store/pokemon/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchPokemon = ({ pokemonNameList }) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState(pokemonNameList[0]);

  return (
    <Box sx={{ display: "flex" }}>
      <Autocomplete
        onChange={(_, newValue) => setSearchValue(newValue)}
        disablePortal
        options={pokemonNameList}
        sx={{ width: "86%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            label="Search a Pokémon Name!"
            sx={{ textTransform: "capitalize" }}
          />
        )}
      />
      <Button
        variant="primary"
        sx={{
          marginLeft: "1em",
          minWidth: "4.3em",
          padding: "0.6em 0",
        }}
        onClick={() => dispatch(searchByPokemonName({ name: searchValue }))}
      >
        <SearchIcon fontSize="small" />
      </Button>
    </Box>
  );
};

export default SearchPokemon;
