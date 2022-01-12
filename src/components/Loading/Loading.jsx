import React, {useEffect, useState} from 'react';
import ReactLoading from 'react-loading';
import PostFeed from '../PostFeed/PostFeed';

export default function Loading(){

    const [data, setData] = useState([])
    const [done, setDone] = useState(undefined)

    useEffect (() => { 
    setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => {
        setData(json);
        setDone(true)
        })
    }, 2000)
}, []);

    return(
    <>
    {
        !done ? (<ReactLoading type={'bars'} color={'black'} height={200} width={200} />) : (<h1>Your data</h1>)
    }
    </>
    )
}