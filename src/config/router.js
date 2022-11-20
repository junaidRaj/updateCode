import { AdUnits } from "@mui/icons-material";
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import Admin from "../Admin/admin";
import Booking from "../Admin/Booking";
import BookingData from "../Admin/BookingData";
import Home from "../Screens/home";
import Login from "../Screens/login";
import Signup from "../Screens/signup";

function AppRouter(){
    return<>
    <Router>
        <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="booking" element={<Booking/>}/>
            <Route path="bookingData" element={<BookingData/>}/>
            <Route path="home:id/*" element={<Home/>}/>
            <Route path="admin/*" element={<Admin/>}/>
        </Routes>
    </Router>
    </>
}
export default AppRouter;