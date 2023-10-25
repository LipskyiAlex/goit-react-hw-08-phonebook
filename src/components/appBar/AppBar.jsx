import * as React from 'react';
import Box from '@mui/material/Box';
import Container from './Container';
import Toolbar from './ToolBar';
import { Outlet, NavLink } from 'react-router-dom';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUserName,selectIsLoggedIn } from 'redux/auth';
export const AppBar = () =>  {
   
  const isLogged = useSelector(selectUserName);
  const name = useSelector(selectIsLoggedIn);
    
  const dispatch = useDispatch();
   
  const handleClick = () => {

    dispatch(logOut())
  }

  return (
    <div>
      <Container position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <NavLink to='/'>Home</NavLink>
          {isLogged &&<NavLink to='/contacts'>Contacts</NavLink> }
          
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {!isLogged && <NavLink to='/login'>Sign In</NavLink>}
            {!isLogged && <NavLink to='/register'>Sign Up</NavLink>}
            {isLogged && <p>Hello {name}!</p>}
            {isLogged &&  <button type='button' onClick={handleClick}>Log out</button>}
          </Box>
        </Toolbar>
      </Container>
      <Toolbar />
      <Outlet />
    </div>
  );
}


