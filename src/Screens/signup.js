import { Box, TextField,Button } from '@mui/material';
import React, { useState } from 'react'
import { signUpUser } from '../config/firebaseMethod';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';


export default function Signup() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [isLoading, setLoader] = useState(false);
  let navigate = useNavigate();
  let signUp = () =>{
    setLoader(true);
    signUpUser({email,password,
      userName: "junaid",
      contact: "0312548754",
    })
    .then((Succes) => {
      setLoader(false);
      navigate('/Login')
      console.log(Succes)
    })
    .catch((error) => {
      setLoader(false);
    console.log(error)
    });
  }
  return (
    <>
   <Container sx={{ml:40,mt:17}}>
   <Box sx={{border: "1px solid white", width:"20%",p:5, borderRadius: 5,boxShadow:"7px,7px",backgroundColor:"#89CFF0"}}>
    <h1 style={{textAlign: "center"}}>Sign Up</h1>

    <Box sx={{pt:2}}>
    <TextField 
    label="Email"
    onChange={(e) => setEmail(e.target.value)}
    />
    </Box>
    <Box>
    <TextField 
    sx={{pt:1}}
    type="password"
    label="Password"
    onChange={(e) => setPassword(e.target.value)}
    />
    <Button sx={{m: "0 auto", mt:2, width:"100%" }} variant='contained' disabled={isLoading} onClick={signUp}>{isLoading?<CircularProgress color="inherit" />: "Sign Up" }</Button>
    </Box>
    </Box>
   </Container>
    </>
  )
}
