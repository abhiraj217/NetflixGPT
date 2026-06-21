import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../UserSlice";
import MoviesSliceReducer from "../MoviesSlice";
import gptSearchReducer from "../GptSearchSlice";


const Store = configureStore({
    reducer:{
        netflixUsers:usersReducer,
        moviesList: MoviesSliceReducer,
        gptSearch: gptSearchReducer 
    }
})

export default Store;