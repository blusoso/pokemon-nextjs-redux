import React from "react";
import { Autocomplete, Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchPokemon = ({ pokemonNameList }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Autocomplete
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
      >
        <SearchIcon fontSize="small" />
      </Button>
    </Box>
  );
};

export default SearchPokemon;
