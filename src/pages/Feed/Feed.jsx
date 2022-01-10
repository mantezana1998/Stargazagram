import { Grid } from "semantic-ui-react";
import PostFeed from '../../components/PostFeed/PostFeed'

export default function Layout({user, handleLogout}) {
  return (
    <Grid centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 450 }}>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 450 }}>
        <PostFeed />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  );
}