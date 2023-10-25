import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { routes } from 'routes';
import { MainContainer } from './App.styled';

import { AppBar } from './appBar';
import {Contacts, LoginPage, RegisterPage} from 'pages';
import Home from '../pages/Home';

const App = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path={routes.HOME} element={<AppBar />} >
        <Route index element={<Home />} />
        {/* <Route
         path='/login'
         element={
          <RestrictedRoute redirectTo='/contacts' component={<LoginPage/>} />
         }
        />
        <Route 
        path='/register'
        element={
          <RestrictedRoute redirectTo='/contacts' component={<RegisterPage/>}/>
        }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts/>} />
          }
        /> */}
       
        <Route path={routes.CONTACTS} element={<Contacts />} />
        <Route path={routes.LOGIN} element={<LoginPage/>} />
        <Route path={routes.REGISTER} element={<RegisterPage/>} />
        </Route>
        {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>
    </MainContainer>
  );
};

export default App;
