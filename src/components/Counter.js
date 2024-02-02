// import React, {useState} from 'react';
// import classes from './Counter.module.css';
// import { useSelector , useDispatch } from 'react-redux';

// const Counter = () => {

//   // const[showCounter,setShowCounter]=useState(false);

//   const dispatch= useDispatch();
//   const counter= useSelector(state => state.counter);
//   const showCounter= useSelector(state => state.showCounter);

//   const incrementHandler=()=>{
//     dispatch({type:'increment'})
//   }
//   const increaseHandler=()=>{
//     dispatch({type:'increase', amount:5})
//   }

//   const decrementHandler=()=>{
//     dispatch({type:'decrement'})
//   }

//   const toggleCounterHandler = () => {
//     // setShowCounter(prevCounter => !prevCounter);

//              //OR(using redux)
//     dispatch({type:'showCounterToggle'})
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
                       
//       {/* {showCounter===true &&   <div className={classes.value}>{counter}</div>} */}
      
//                        {/* OR(using redux) */}
//     {showCounter===true &&   <div className={classes.value}>{counter}</div>}
//     <div>
//         <button onClick={incrementHandler}>increment</button>
//         <button onClick={increaseHandler}>increment By 5</button>
//         <button onClick={decrementHandler}>decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;



                                          //OR(Using ReduxToolkit)

import React, {useState} from 'react';
import classes from './Counter.module.css';
import { useSelector , useDispatch } from 'react-redux';

import  {counterActions} from '../store/Counter-slice.js';


const Counter = () => {

 

   const dispatch= useDispatch();
    const counter= useSelector(state => state.counterReducerFunctionByMe.counter);
  const showCounter= useSelector(state => state.counterReducerFunctionByMe.showCounter);

  const incrementHandler=()=>{
    dispatch(counterActions.increment()) //{type:"some unique identifier"}
  }
  const increaseHandler=()=>{
    dispatch(counterActions.increase(5))  //{type:"some unique identifier", payLoad:5}
  }

  const decrementHandler=()=>{
    dispatch(counterActions.decrement())    //{type:"some unique identifier"}
  }

  const toggleCounterHandler = () => {    //{type:"some unique identifier"}
    // setShowCounter(prevCounter => !prevCounter);

             //OR(using redux)
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
                       
      {/* {showCounter===true &&   <div className={classes.value}>{counter}</div>} */}
      
                       {/* OR(using redux) */}
    {showCounter===true &&   <div className={classes.value}>{counter}</div>}
    <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increment By 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

