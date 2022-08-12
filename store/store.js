import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import pokemon from "./pokemon/pokemonSlice";

export const store = () =>
  configureStore({
    reducer: {
      pokemon,
    },
  });

export const wrapper = createWrapper(store);
