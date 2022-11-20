import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Booking from "../Admin/Booking";
import Navbar from "../Components/Appbar";
import Smbutton from "../Components/Smbutton";
import Smswitch from "../Components/Smswitch";
import { checkUser, sendData } from "../config/firebaseMethod";



export default function Home() {
  // const [model, setModel] = useState({});
  // const [coursestatus, setcoursestatus] = useState(false);
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const params = useParams();
  let data = useSelector((e) => e.login);
  // console.log(data);
  useEffect(() => {
    checkUser()
      .then((res) => {
        console.log(res);
        if (params.id == res) {
          setUserId(res);
          // getTodoData();
        } else {
         
        }
      })
      .catch((err) => {
        console.log("No data");
      });
  }, []);

  //  let submitform = () => {
  //    model.isShowResult = coursestatus;
  //  console.log(model);
  // };
  return (
    <>
    <Navbar/>
      <Booking/>
    </>
  );
}
