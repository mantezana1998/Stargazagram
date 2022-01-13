import { Grid } from "semantic-ui-react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Layout(props) {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Header user={props.user} handleLogout={props.handleLogout}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Outlet />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}