import { createSlice } from "@reduxjs/toolkit";
import { CreateUser, logIn, logOut } from "./operations";

const initialState = {

    user: {name: null, email: null},
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
}

const handlePending = state => {

      state.isRefreshing = true
}

const handleRejected = (state, {payload}) => {

    state.isRefreshing = false;
    state.error = payload;
}

const authSlice = createSlice({
 
    name: 'auth',
   initialState,

 extraReducers: {

    
 }
 })

 