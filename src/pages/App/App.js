import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import Feed from '../Feed/Feed';
import Layout from '../Layout/Layout';
import Loading from '../../components/Loading/Loading'
import userService from '../../utils/userService';

export default function App() {

  const [nasa, setNasa] = useState([])
  const [user, setUser] = useState(userService.getUser())

  useEffect (() => {
    const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=7Q1WSbEb5bRLEhI9qORlPb0AdnQ5iP59BKRIIx6o&start_date=2021-12-01`
    
    fetch(nasaUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data, 'this is the data')
      setNasa(data)
    }).catch((err) => {
      console.log(err, 'err on app.js')
    });
  }, [])

  function handleSignupOrLogin (){
    setUser(userService.getUser())
  }

  console.log(user, 'this is the user')

  return (
    <Routes>
      <Route path='/' element={<Layout user={user} />}>
        <Route index element={<Feed data={nasa} user={user} />} />
        <Route path='/loading' element={<Loading />}/>
        <Route path='/signup' element={<SignupPage handleSignupOrLogin={handleSignupOrLogin} />}/>
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
