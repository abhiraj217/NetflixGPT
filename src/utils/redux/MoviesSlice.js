import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {options} from "../Options";

export const getAllMovies = createAsyncThunk(
    "moviesList/getAllMovies",

    async ( _, {rejectWithValue})=>{
        try{

        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        const data = await response.json();
        console.log(data , "sndks");
        return data;

        }catch(error){
             return rejectWithValue(error.message);

        }
    }
)

export const getMainMovie = createAsyncThunk(
  "moviesList/getMainMovie",
  
  async(movie_id, {rejectWithValue})=>{
    try{
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, options);
      const data = await response.json();
      return data;


    }catch(error){
      return rejectWithValue(error.message);
    }
  }
)

export const gettopRatedMovies = createAsyncThunk(
  "moviesList/gettopRatedMovies",

  async( _, {rejectWithValue})=>{
    try{
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
      const data = await response.json();
      return data;

    }catch(error){
      return rejectWithValue(error.message);
    }
  }
)

export const getPopularMovies = createAsyncThunk(
  "moviesList/getPopularMovies",

  async( _, {rejectWithValue})=>{
    try{
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
      const data = await response.json();
      return data;

    }catch(error){
      return rejectWithValue(error.message);
    }
  }
)

export const getUpcomingMovies = createAsyncThunk(
  "moviesList/getUpcomingMovies",

  async( _, {rejectWithValue})=>{
    try{
      const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
      const data = await response.json();
      return data;

    }catch(error){
      return rejectWithValue(error.message);
    }
  }
)

const MoviesSlice = createSlice({
  name: "moviesList",

  initialState: {
    movies: [],
    mainMovieVideos: [],
    topRatedMovies:[],
    popularMovies:[],
    upcomingMovies:[],
    mainMoviewVideoLoading: false,
    moviesloading: false,
    error: null
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        state.moviesloading = true;
      })

      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.moviesloading = false;
        state.movies = action.payload.results || [];
      })

      .addCase(getAllMovies.rejected, (state, action) => {
        state.moviesloading = false;
        state.movies = [];
        state.error = action.payload || action.error.message;
      })

       .addCase(getMainMovie.pending, (state) => {
        state.mainMoviewVideoLoading = true;
      })

      .addCase(getMainMovie.fulfilled, (state, action) => {
        state.mainMoviewVideoLoading = false;
        state.mainMovieVideos = action.payload.results || [];
      })

      .addCase(getMainMovie.rejected, (state, action) => {
        state.mainMoviewVideoLoading = false;
        state.mainMovieVideos = [];
        state.error = action.payload || action.error.message;
      })

      .addCase(gettopRatedMovies.pending, (state) => {
        state.mainMoviewVideoLoading = true;
      })

      .addCase(gettopRatedMovies.fulfilled, (state, action) => {
        state.mainMoviewVideoLoading = false;
        state.topRatedMovies = action.payload.results || [];
      })

      .addCase(gettopRatedMovies.rejected, (state, action) => {
        state.mainMoviewVideoLoading = false;
        state.topRatedMovies = [];
        state.error = action.payload || action.error.message;
      })

      .addCase(getPopularMovies.pending, (state) => {
        state.mainMoviewVideoLoading = true;
      })

      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.mainMoviewVideoLoading = false;
        state.popularMovies = action.payload.results || [];
      })

      .addCase(getPopularMovies.rejected, (state, action) => {
        state.mainMoviewVideoLoading = false;
        state.popularMovies = [];
        state.error = action.payload || action.error.message;
      })
      .addCase(getUpcomingMovies.pending, (state) => {
        state.mainMoviewVideoLoading = true;
      })

      .addCase(getUpcomingMovies.fulfilled, (state, action) => {
        state.mainMoviewVideoLoading = false;
        state.upcomingMovies = action.payload.results || [];
      })

      .addCase(getUpcomingMovies.rejected, (state, action) => {
        state.mainMoviewVideoLoading = false;
        state.upcomingMovies = [];
        state.error = action.payload || action.error.message;
      });
  }
});

export default MoviesSlice.reducer;
