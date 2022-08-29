import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "../components/Footer";
import JuiceLab from "../components/JuiceLab";
import Navbar from "../components/Navbar";
import Checkout from "../components/Checkout";
import { ContextContainer } from "../components/context/ContextContainer";
import Register from "../components/Register";
import Login from "../components/Login";


const Routings = () => (
    <ContextContainer>
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<JuiceLab/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>

        </Routes>
        <Footer/>

    </Router>
    </ContextContainer>


)

export default Routings