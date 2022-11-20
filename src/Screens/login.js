import { TextField, Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { loginUser, getData } from "../config/firebaseMethod";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/FirebaseSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoader] = useState(false);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let login = () => {
    setLoader(true);
    loginUser({
      email,
      password,
    })
      .then((sucess) => {
        setLoader(false);

        getData("user", sucess.id)
          .then((data) => {
            console.log(data);
            console.log("Data successfully Recive");
            dispatch(addItem(data));
          })
          .catch(() => {
            console.log("Something want wrong");
          });

        navigate(`/home${sucess.id}`);
        console.log(sucess);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };
  return (
    <>
      <Container sx={{ ml: 40, mt: 17 }}>
        <Box
          sx={{
            border: "1px solid white",
            width: "20%",
            p: 5,
            borderRadius: 5,
            boxShadow: "7px,7px",
            backgroundColor: "#89CFF0",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <Box sx={{ mt: 4 }}>
            <TextField
              label="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box>
            <TextField
              label="password"
              type="password"
              sx={{ pt: 1 }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box sx={{ m: "0 auto", mt: 2 }}>
            <Button onClick={login} sx={{ width: "100%" }} variant="contained">
              {isLoading ? <CircularProgress color="inherit" /> : "Login"}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
export default Login;
