import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import Header from '../../components/Header/Header'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
