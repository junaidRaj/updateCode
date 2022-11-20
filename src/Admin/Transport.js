import { Button, Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Smbutton from '../Components/Smbutton';
import SmInput from '../Components/SmInput'
import CircularProgress from '@mui/material/CircularProgress';
import { getData, sendData } from '../config/firebaseMethod';
import Smgrid from '../Components/Smgrid';


export default function Transport() {
    const [model, setModel] = useState({});
    const [data,setData] = useState([])
    const [isLoading, setLoader] = useState(false);
    let fillModel = (key,val)=>{
        model[key] = val;
        setModel({...model})
        };
    let addItem =() =>{
        setLoader(true)
        sendData(model,"Transport")
        .then((res)=>{
            console.log(res)
            setLoader(false)
        }).catch((err)=>{
            setLoader(false)
            console.log(err)
        })
    }
    let transportData = ()=>{
        getData("Transport")
        .then((res)=>{
            setData(res)
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        transportData()
    },[])
  return (
    <>
      <Container  sx={{border: "1px solid black", borderRadius:"20px" }}>
      <h1>Transport</h1>
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
                label="Seats"
                value={model.Seats}
                onChange={(e) =>fillModel("Seats",e.target.value)}
                />
            </Grid>
           <Grid md={6} item>
                <SmInput
                label="Private Transport"
                value={model.privateTransport}
                onChange={(e) =>fillModel("privateTransport",e.target.value)}
                />
            </Grid>
           <Grid md={6} item>
           <Box>
            <Button onClick={addItem} fullWidth sx={{p:2}} variant="contained">{isLoading ? <CircularProgress color="inherit" /> :"Sumbit" }</Button>
        </Box>
            </Grid>
           </Grid>
        </Box>
      </Container>
      <Smgrid 
      datasource={data}
      Cols={[
        {
            key: "id",
            displayName: "Id,"
        },
        {
            key: "routeName",
            displayName: "RouteName",
        },
        {
            key: "transportName",
            displayName: "TransportName",
        },
        {
            key: "privateTransport",
            displayName: "private Transport",
        },
        {
            key: "Seats",
            displayName: "Seats",
        },
        {
            key: "Time",
            displayName: "Time",
        },
      ]}
      />
    </>
  )
}
