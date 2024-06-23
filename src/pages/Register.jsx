import { AppBar, Button, Card, CardContent, Container, LinearProgress, TextField, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../features/auth/authslice';

const Register = () => {
    
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const [formData , setFormData] = useState({
    name : "",
    email : "",
    password : "",
    c_password : "",
  });
  const { name , email, password, c_password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    });
  };

  const handleSubmit =(e) => {
    e.preventDefault()
    
    if (password !== c_password){
      toast.error("Password does not match!!") 
    }
    dispatch(registerUser(formData));
  }
  const {isLoading, isSuccess, isError, message, user} = useSelector(
    (state) => state.auth
  );

  useEffect(() => {

    if(user||isSuccess){
      navigate('/');
    }
  if(isError || message){
    toast.error(message);
  }
  },[isError,message,user ]);
  
  if(isLoading){
    return(
      <Container sx={{ padding: '80px 0px'}}>
        <LinearProgress/>
      </Container>
    );
   }

  

  return (
    <Container sx={{ padding: '80px 0px'}}>    
       <Typography  variant='h4' align='center'>
        Create An Account
       </Typography>
      
       <Card sx={{margin: '10px 0px'}}>
          <CardContent>
            <form onSubmit={handleSubmit}>
               <TextField 
               sx={{ margin: '10px 0px'}}
               variant='outlined'
               label='Enter Name'
               type='text'
               fullWidth
               name="name"
               value={name}
               onChange={handleChange}
               />

              <TextField
                sx={{ margin: '10px 0px'}}
                variant='outlined'
                label='Enter Email'
                type='email'
                 fullWidth
                 name='email'
                 value={email}
                 onChange={handleChange}
               />

               <TextField 
                sx={{ margin: '10px 0px'}}
                variant='outlined'
                label='Enter Password'
                type='Password'
                fullWidth
                name='password'
                value={password}
                onChange={handleChange}
               />
              
              <TextField
                sx={{ margin: '10px 0px'}}
                variant='outlined'
                label='Conform password'
                type='password'
                fullWidth
                name='c_password'
                value={c_password}
                onChange={handleChange}
              />
               
              <Button type='submit' variant='contained' color='success' fullWidth>Register</Button>

            </form>
          </CardContent>
       </Card>
    </Container>
  );
};

export default Register;
