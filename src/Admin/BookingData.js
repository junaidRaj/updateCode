import { Button, Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Smbutton from '../Components/Smbutton';
import SmInput from '../Components/SmInput'
import CircularProgress from '@mui/material/CircularProgress';
import Smgrid from '../Components/Smgrid';
import { sendData } from '../config/firebaseMethod';
import SMselect from '../Components/SMselect';

export default function BookingData() {
    const [isLoading, setLoader] = useState(false);
    const [model, setModel] = useState({});
    let fillModel = (key,val)=>{
        model[key] = val;
        setModel({...model})
};

let addItem =() =>{
    setLoader(true)
    sendData(model,"BookingData")
    .then((res)=>{
        console.log(res)
        setLoader(false)
    }).catch((err)=>{
        setLoader(false)
        console.log(err)
    })
}
  return (
    <>
      <Container  sx={{border: "1px solid black", borderRadius:"20px",mt:5 }}>
      <h1 sx={{mt:4}}>BookingData</h1>
        <Box sx={{p:5, height: "50vh"}}>
           <Grid container spacing={1}>
           <Grid md={6} item>

                <SmInput
                label="Transport Name"
                value={model.transportName}
                onChange={(e) =>fillModel("transportName",e.target.value)}
                />
            </Grid>
           <Grid md={6} item>
                 <SmInput
                label="Route Name"
                value={model.routeName}
                onChange={(e) =>fillModel("routeName",e.target.value)}
                />
            </Grid>
           <Grid md={6} item>
                <SmInput
                label="Time"
                value={model.Time}
                onChange={(e) =>fillModel("Time",e.target.value)}
                />
            </Grid>
           <Grid md={6} item>
                <SmInput
                label="Price"
                value={model.price}
                onChange={(e) =>fillModel("price",e.target.value)}
                />
            </Grid>
           <Grid md={6} item>
                <SmInput
                label="Seats"
                value={model.Seats}
                onChange={(e) =>fillModel("Seats",e.target.value)}
                />
            </Grid>
           <Grid md={6} item>
           <SMselect
                label="Booking"
                value={model.Weeks}
                onChange={(e) =>fillModel("Weeks",e.target.value)}
                datasource={[
                    {
                      id: "1",
                      displayname: "1 Week", 
                    },
                    {
                      id: "2",
                      displayname: "2 Week",
                    },
                    {
                      id: "3",
                      displayname: "3 Week",
                    },
                  ]}
                  />
            </Grid>
           <Grid md={6} item>
           <Box sx={{pt:2}}>
            <Button onClick={addItem} fullWidth variant="contained">{isLoading ? <CircularProgress color="inherit" /> :"Sumbit" }
            </Button>
        </Box>
            </Grid>
           </Grid>
        </Box>
      </Container>
    </>
  )
}
