import * as React from 'react';
import Box from '@mui/material/Box';
import Container from './Container';
import Toolbar from './ToolBar';
import { Suspense } from 'react';
import { Outlet} from 'react-router-dom';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import { selectIsLoggedIn } from 'redux/auth';
import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav';
import { UserMenu } from './userMenu';

export const AppBar = () =>  {
   
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <div>
      <Container position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Navigation/>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
             {isLogged ? <UserMenu/> : <AuthNav/>}
          </Box>
        </Toolbar>
      </Container>
      <Toolbar />
      <Suspense fallback={<div>Loading...</div>}> 
      <Outlet />
      </Suspense>
   
    </div>
  );
}


