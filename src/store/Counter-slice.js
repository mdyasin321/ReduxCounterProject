import { createSlice} from "@reduxjs/toolkit";

const initialCounterStateByme={counter:0,showCounter:false};

const counterSlice=createSlice({
  name: 'counter',
  initialState:initialCounterStateByme,
  reducers:{
    increment (state){
      state.counter=state.counter+1;
    },
    decrement (state){
      state.counter=state.counter-1;


    },
    increase (state,action){

      state.counter=state.counter+action.payload;

    },
    toggle (state){
     state.showCounter=!state.showCounter;
    }

  }
})

//For dispatching actions we have created this
export const counterActions=counterSlice.actions;


export default counterSlice;
