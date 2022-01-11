import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import Feed from '../Feed/Feed';
import Layout from '../Layout/Layout';
import Loading from '../../components/Loading/Loading'

export default function App() {

  const [nasa, setNasa] = useState([])

  // useEffect (() => {
  //   const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=87IOLNN8rbuKQxLzMCDoLLefPb4tfofbuNfZXv57&start_date=2021-12-01`
    
  //   fetch(nasaUrl)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data, 'this is the data')
  //     setNasa(data)
  //   }).catch((err) => {
  //     console.log(err, 'err on app.js')
  //   });
  // }, [])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Feed data={nasa}/>} />
        <Route path='loading' element={<Loading />}/>
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
