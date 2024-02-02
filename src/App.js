import React from 'react';
import Counter from './components/Counter';
import Header from "./components/Header.js";
import Auth from './components/Auth.js';
import UserProfile from './components/UserProfile.js';

import { useSelector } from 'react-redux';




function App() {
  const isAuth=useSelector(state=>
    
      state.authenticationReducerFunctionByMe.isAuthenticated
    
  )
  return (
    <React.Fragment>
      <Header />
     {isAuth===false && <Auth />}
     {isAuth===true && <UserProfile />}
    <Counter />
    </React.Fragment>
  );
}

export default App;
