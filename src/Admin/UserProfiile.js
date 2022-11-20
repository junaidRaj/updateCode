import { Box, Card, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export default function UserProfiile() {
  return (
    <>
       <Box sx={{width:50, ml:50, }}>
                  <Grid container spacing={1}>
                    <Grid md={6} item>
                    <Card sx={{   width:257, bgcolor: 'black', color:"white" ,p:5,borderRadius:15 }}>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MASH1cd505q-0PEQbyKAE3fs6UZoY92ScA&usqp=CAU" width={"100%"} alt="..."/>
                 {/* <Typography sx={{ mb: 1.5 , ms:1 }}>
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
                 </Typography> */}
              </Card>
                    </Grid>
                  </Grid>
                </Box>
    </>
  );
}
