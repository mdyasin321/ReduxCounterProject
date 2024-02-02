// import { createStore } from "redux";


// const counterReducer =(state={counter : 0, showCounter:false}, action)=>{
 
//     if(action.type==='increment'){
//         return {
//              counter:state.counter+1,
//              showCounter:state.showCounter
//            }
//     }

//       if(action.type==='decrement'){
//         return {
//              counter:state.counter-1,
//              showCounter:state.showCounter

//            }
//     }

//     if(action.type==='increase'){
//       return {
//            counter:state.counter+action.amount,
//            showCounter:state.showCounter

//          }
//   }

//   if(action.type==='showCounterToggle'){
//     return {
//          counter:state.counter,
//          showCounter:!state.showCounter

//        }
// }

//     return  state;
   
// }

// const store= createStore(counterReducer);

// // now here I will not write dispatch action, because I want that the components of react app should dispatch action, so I will connect
// // the store with the react components,so I will first export this store.


// export default store;






                          //OR(Using Redux toolkit)


// import { createSlice,configureStore } from "@reduxjs/toolkit";

// const initialCounterStateByme={counter:0,showCounter:false};

// const counterSlice=createSlice({
//   name: 'counter',
//   initialState:initialCounterStateByme,
//   reducers:{
//     increment (state){
//       state.counter=state.counter+1;
//     },
//     decrement (state){
//       state.counter=state.counter-1;


//     },
//     increase (state,action){

//       state.counter=state.counter+action.payload;

//     },
//     toggle (state){
//      state.showCounter=!state.showCounter;
//     }

//   }
// })



// //For UserAuthentication

// const initialAuthenticationState= {isAuthenticated:false}

// const authSlice=createSlice({
//   name:'authentication',
//   initialState:initialAuthenticationState,
//   reducers:{
//     login (state){
//       state.isAuthenticated=true;
//     },
//     logout (state){
//       state.isAuthenticated=false;
//     }
//   }
// })



// //For taking the states values using useSelector() hool we have created this
// const store= configureStore({
//   reducer:{
//     counterReducerFunctionByMe:counterSlice.reducer,
//     authenticationReducerFunctionByMe:authSlice.reducer
//   },
 
// })


// //For dispatching actions we have created this
// export const counterActions=counterSlice.actions;
// export const isAuthActions=authSlice.actions;

// export default store;






                                         //OR(Using toolkit but splitted the code)
    
import { createSlice,configureStore } from "@reduxjs/toolkit";

import counterSlice from "./Counter-slice";
import authSlice from "./Auth-slice";








//For taking the states values using useSelector() hool we have created this
const store= configureStore({
  reducer:{
    counterReducerFunctionByMe:counterSlice.reducer,
    authenticationReducerFunctionByMe:authSlice.reducer
  },
 
})



export default store;