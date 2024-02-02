import { createSlice } from "@reduxjs/toolkit";

const initialAuthenticationState= {isAuthenticated:false}

const authSlice=createSlice({
  name:'authentication',
  initialState:initialAuthenticationState,
  reducers:{
    login (state){
      state.isAuthenticated=true;
    },
    logout (state){
      state.isAuthenticated=false;
    }
  }
})

//For dispatching actions we have created this
export const isAuthActions=authSlice.actions;

export default authSlice;
