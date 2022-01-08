import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Home Page</h1>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}
