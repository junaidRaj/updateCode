import { Card, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import Smbutton from '../Components/Smbutton';
import { getData } from '../config/firebaseMethod'

export default function Verify() {
    const [data,setData] = useState([]);
    let addData = () =>{
        getData("BookingData")
        .then((res)=>{
            setData(res)
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        addData()
    },[])
  return (
    <>
      <h1>Verify</h1>
     {
        data.map((e,i)=>{
            return(
                <Box sx={{width:50}}>
                  <Grid container spacing={1}>
                    <Grid md={4} item>
                    <Card sx={{ minWidth: 275   , bgcolor: 'Black', color:'white' ,p:2 }}>
                 <Typography sx={{ mb: 1.5 , ms:1 }}>
                 Time | <b> {e.Time}</b>
                 </Typography>
                 <Typography sx={{ mb: 1.5 ,  }}>
                 Week | <b>{e.Weeks}</b>
                 </Typography>
                 <Typography sx={{ mb: 1.5 }}>
                 Route | <b>{e.routeName}</b>
                 </Typography>
                 <Typography sx={{ mb: 1.5 }}>
                 TransportName | <b>{e.transportName}</b>
                 </Typography>
                 <Typography sx={{ mb: 1.5 }}>
                 Price | <b>{e.price}</b>
                 </Typography>
                 <Smbutton 
                 label="Verify"
                 /> 
              </Card>
                    </Grid>
                  </Grid>
                </Box>
            )
            
        })
     }

    </>
  )
}
