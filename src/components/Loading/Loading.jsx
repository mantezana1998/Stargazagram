import React, {useEffect, useState} from 'react';
import ReactLoading from 'react-loading';

export default function Loading(){

    const [data, setData] = useState([])
    const [done, setDone] = useState(undefined)

    useEffect (() => { 
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => {
            setData(json);
            setDone(true)
    })});

    return(
    <>
        <ReactLoading 
        type={'bubble'} 
        color={'black'} 
        height={200} 
        width={200} 
        />
    </>
    )
}