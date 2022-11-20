import { Card, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Smbutton from "../Components/Smbutton";
import { getData } from "../config/firebaseMethod";

export default function Booking() {
    let navigate = useNavigate();
  const [data, setData] = useState([]);
  let bookingData = () => {
    getData("CreateTransport")
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    bookingData();
  }, []);
  return (
    <>
      <h1>Booking</h1>
      <br/>
    
          <Box sx={{width:50, ml:3, borderRadius:'20'}}>
               {
                   data.map((e,i)=>{
                       return(
                        <Grid container spacing={1}>
                        <Grid md={4} item>
                        <Card sx={{ minWidth: 275   , bgcolor: 'black', color:"white" ,p:2 }}>
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-hKPre0IlAsHB4kbKP-ceJPT3beD0lhfoAg7rh1kVg&s" width={"100%"} alt="..."/>
                     <Typography sx={{ mb: 1.5 , ms:1 }}>
                     Cars | <b> {e.cars}</b>
                     </Typography>
                     <Typography sx={{ mb: 1.5 ,  }}>
                     Seats | <b>{e.Seats}</b>
                     </Typography>
                     <Typography sx={{ mb: 1.5 }}>
                     Route | <b>{e.route}</b>
                     </Typography>
                     <Typography sx={{ mb: 1.5 }}>
                     days | <b>{e.days}</b>
                     </Typography>
                     <Typography sx={{ mb: 1.5 }}>
                     Price | <b>{e.prices}</b>
                     </Typography>
                     <Smbutton 
                     label="Book Now"
                     onClick={()=>navigate("/BookingData")}
                     /> 
                  </Card>
                        </Grid>
            </Grid>
                    )
                })
            }
          </Box>
           
    
    </>
  );
}
