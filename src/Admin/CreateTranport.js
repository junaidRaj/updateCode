import { Button, Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Smbutton from '../Components/Smbutton';
import SmInput from '../Components/SmInput'
import CircularProgress from '@mui/material/CircularProgress';
import { getData, sendData } from '../config/firebaseMethod';
import Smgrid from '../Components/Smgrid';

export default function CreateTranport() {
    const [model, setModel] = useState({});
    const [isLoading, setLoader] = useState(false);
    let fillModel = (key,val)=>{
        model[key] = val;
        setModel({...model})
        };

        let addItem =() =>{
            setLoader(true)
            sendData(model,"CreateTransport")
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
      <Container  sx={{border: "1px solid black", borderRadius:"20px" }}>
      <h1>New Transport</h1>
        <Box sx={{p:5, height: "50vh"}}>
           <Grid container spacing={1}>
           <Grid md={6} item>
                <SmInput
                label="Cars"
                value={model.cars}
                onChange={(e) =>fillModel("cars",e.target.value)}
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
                <SmInput
                label="Route"
                value={model.route}
                onChange={(e) =>fillModel("route",e.target.value)}
                />
            </Grid>
           <Grid md={6} item>
                <SmInput
                label="days"
                value={model.days}
                onChange={(e) =>fillModel("days",e.target.value)}
                />
            </Grid>
           <Grid md={6} item>
                <SmInput
                label="prices"
                value={model.prices}
                onChange={(e) =>fillModel("prices",e.target.value)}
                />
            </Grid>
           <Grid md={6} item>
           <Box>
            <Button onClick={addItem} fullWidth sx={{p:2}} variant="contained">{isLoading ? <CircularProgress color="inherit" /> :"Submit" }</Button>
        </Box>
            </Grid>
           </Grid>
        </Box>
      </Container>

    </>
  )
}
