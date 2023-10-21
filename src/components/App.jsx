import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { MainContainer } from './App.styled';

import AppAppBar from './appBar/AppBar';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import Login from '../pages/Login';

const App = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<AppAppBar />} >
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
        </Route>
        <Route path="/contacts" element={<Contacts />} />
        <Route path='/login' element={<Login/>} />
        {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>
    </MainContainer>
  );
};

export default App;
