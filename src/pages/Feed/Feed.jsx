import React, {useState, useEffect} from 'react';
import { Grid } from "semantic-ui-react";
import PostFeed from '../../components/PostFeed/PostFeed';
import ReactLoading from 'react-loading';

export default function Layout(props) {

  const [loading, setLoading] = useState(true)

  useEffect (() => { 
    setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then(() => {
        setLoading(false)
        })
    }, 3000)
}, []);

  if (loading){
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <ReactLoading 
          type={'cylon'} 
          height={600}
          width={600}
          color={'black'}
          />
        </Grid.Column>
      </Grid>
    )
  }

  return (
    <>
    <Grid centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 450 }}>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 450 }}>
        <PostFeed data={props.data} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </>
  );
}