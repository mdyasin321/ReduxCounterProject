import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {isAuthActions} from '../store/Auth-slice.js';

const Header = () => {

  const isAuth=useSelector(state=>
    
    state.authenticationReducerFunctionByMe.isAuthenticated
  
)

const dispatch= useDispatch();

const logoutHandler=()=>{
  dispatch(isAuthActions.logout())
}

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>

      { isAuth===true &&
      <nav>
        <ul>
    
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>

          
        </ul>
      </nav>

}
    </header>
  );
};

export default Header;
