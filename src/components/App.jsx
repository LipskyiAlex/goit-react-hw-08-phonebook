import React, {lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'routes';
import { MainContainer } from './App.styled';

import { AppBar } from './appBar';

const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));


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
