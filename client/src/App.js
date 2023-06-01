import Login from "./pages/login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Forgetpass from "./pages/Forgetpass";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import AllUser from "./pages/AllUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/slices/authSlice";
import Home from "./pages/Home";
import  Profile from "./pages/Profile";
function App() {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getUser())
  },[])
  return (
    <div>
      <NavBar />
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/profil" element={<Profile/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<Forgetpass />} />
        <Route path="/users" element={<AllUser />} />
      </Routes>
    </div>
  );
}

export default App;
