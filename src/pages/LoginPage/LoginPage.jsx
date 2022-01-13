import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import '../LoginPage/LoginPage.css'

export default function LoginPage (){
  return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header id='header'>
        <Image src='https://i.imgur.com/WsX89jL.jpg' /> Login into Star Gazing
      </Header>
      <Form autoComplete="off">
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button id='button'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message id='message'>
        Dont have an account? <a href='/signup'>Sign up</a>
      </Message>
    </Grid.Column>
  </Grid>
  )
}