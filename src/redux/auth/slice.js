import { createSlice } from "@reduxjs/toolkit";
import { createUser, logIn, logOut } from "./operations";

const initialState = {

    user: {name: null, email: null},
    token:null,
    isLoggedIn: false,
    isLoading: false,
    error: null,

}

const handlePending = state => {

    state.isLoading = true;

}

const handleRejected = (state, {payload}) => {

    state.isLoading = false;
    state.error = payload; 
}

const authSlice = createSlice({
 
    name: 'auth',
   initialState,

 extraReducers: {

     [createUser.pending]: handlePending,
     [logIn.pending]: handlePending,
     [logOut.pending]: handlePending,
     [createUser.rejected]: handleRejected,
     [logIn.rejected]:handleRejected,
     [logOut.rejected]: handleRejected,
     [createUser.fulfilled](state,{payload}){
        
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
     },
     [logIn.fulfilled](state,{payload}){
        
        state.user=payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;

     },
     [logOut.fulfilled](state){

        state.user={name:null,email:null};
        state.token=null;
        state.isLoggedIn=false;
        state.isLoading=false;
     }

 }
 })

 export const authReducer = authSlice.reducer;

 