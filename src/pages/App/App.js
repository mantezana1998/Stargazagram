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
  const [done, setDone] = useState(undefined)

  useEffect (() => {
    setTimeout(() => {
    const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=7Q1WSbEb5bRLEhI9qORlPb0AdnQ5iP59BKRIIx6o&start_date=2021-12-01`
    
    fetch(nasaUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data, 'this is the data')
      setNasa(data)
      setDone(true)
    }).catch((err) => {
      console.log(err, 'err on app.js')
    });
    }, 2000)
  }, [])

//   export default function Loading(){

//     const [data, setData] = useState([])
//     const [done, setDone] = useState(undefined)

//     useEffect (() => { 
//     setTimeout(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => response.json())
//     .then((json) => {
//         setData(json);
//         setDone(true)
//         })
//     }, 2000)
// }, []);

//     return(
//     <>
//     {
//         !done ? (<ReactLoading type={'bars'} color={'black'} height={200} width={200} />) : (<h1>Your data</h1>)
//     }
//     </>
//     )
// }

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Feed data={nasa}/>} />
        <Route path='/loading' element={<Loading />}/>
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
