    import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"netflixUsers",
    initialState:{
        users: null,
    },

    reducers: {
        addUser: (state, action) => {
            state.users = action.payload;
        },

        removeUser: (state) => {
            state.users = null;
        }
        
    }
})

export const  {
    addUser,
    removeUser
} = UserSlice.actions;

export default UserSlice.reducer;