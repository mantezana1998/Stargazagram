import React, {useState} from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import '../SignupPage/SignupPage.css'
import userService from '../../utils/userService'

export default function SignUpPage (){
  const [selectedFile, setSelectedFile] = ('');
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: '',
    bio: ''
  })

  function handleChange(e){
    const name = e.target.name
    const value = e.target.value
    setState({...setState, [name] : [value]})
  }

  function handleFileInput(e){
    console.log(e.target.files)
    setSelectedFile(e.target.files[0])
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
   <Grid.Column style={{ maxWidth: 450 }}>
     <Header id='header'>
       <Image src="https://i.imgur.com/WsX89jL.jpg" /> Sign Up for Star Gazing
     </Header>
     <Form autoComplete="off">
       <Segment stacked>
         <Form.Input
           name="username"
           placeholder="username"
           value={state.username}
           onChange={handleChange}
           required
         />
         <Form.Input
           type="email"
           name="email"
           placeholder="email"
           value={state.email}
           onChange={handleChange}
           required
         />
         <Form.Input
           name="password"
           type="password"
           placeholder="password"
           value={state.password}
           onChange={handleChange}
           required
         />
         <Form.Input
           name="passwordConf"
           type="password"
           placeholder="Confirm Password"
           value={state.passwordConf}
           onChange={handleChange}
           required
         />
         <Form.TextArea
           label="bio"
           name="bio"
           placeholder="Tell us more about you..."
           onChange={handleChange}
         />
         <Form.Field>
           <Form.Input
             type="file"
             name="photo"
             placeholder="upload image"
             onChange={handleFileInput}
           />
         </Form.Field>
         <Button type="submit" id='button'>
           Signup
         </Button>
       </Segment>
       {/* {error ? <ErrorMessage error={error} /> : null} */}
     </Form>
     <Message id='message'>
        Already have an account? <a href='/login'>Login</a>
      </Message>
   </Grid.Column>
 </Grid>

   );
}