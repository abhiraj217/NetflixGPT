import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    searchBtnStatus: false,
    searchedMovies: [],
  },
  reducers: {
    changeGptSearchStatus: (state) => {
      state.searchBtnStatus = !state.searchBtnStatus;
    },
    addGptMovieResult: (state, action) => {
      state.searchedMovies = action.payload;
    },
  },
});

export const { changeGptSearchStatus, addGptMovieResult } =
  GptSearchSlice.actions;

export default GptSearchSlice.reducer;