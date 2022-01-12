import React from 'react';
import { Grid } from "semantic-ui-react";
import PostFeed from '../../components/PostFeed/PostFeed'

export default function Layout(props) {

  return (
    <>
    <Grid centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 450 }}>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 450 }}>
        <PostFeed data={props.data}/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </>
  );
}