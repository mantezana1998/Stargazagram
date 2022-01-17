import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import userService from '../../utils/userService';
import '../LoginPage/LoginPage.css'

export default function LoginPage (props) {

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  function handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value
    })
  }

  async function handleSubmit(e){
    e.preventDefault();
    try {
      await userService.login(user)
      props.handleSignupOrLogin();
      navigate('/')
    }catch(err){
      setError(err.message)
    }
  }

  return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header id='header'>
        <Image src='https://i.imgur.com/WsX89jL.jpg' /> Login into Star Gazing
      </Header>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input 
          fluid icon='user' 
          iconPosition='left' 
          name='email'
          placeholder='email' 
          value={user.email}
          onChange={handleChange}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            name='password'
            placeholder='Password'
            type='password'
            value={user.password}
            onChange={handleChange}
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