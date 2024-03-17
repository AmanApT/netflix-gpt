import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: [],
    movieRecommendation: [],
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addRecommendedMovies: (state, action) => {
      const { movieNames, movieRecommendation } = action.payload;
      state.movieNames = movieNames;
      state.movieRecommendation = movieRecommendation;
    },
  },
});

export const { toggleGptSearchView, addRecommendedMovies } = gptSlice.actions;
export default gptSlice.reducer;
