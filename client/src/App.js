import { Routes, Route } from "react-router-dom";
import Forgetpass from "./pages/Forgetpass";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import AllUser from "./pages/AllUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/slices/authSlice";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ManagingProducts from "./pages/ManagingProducts";
import CreateProduct from "./pages/CreateProduct";
import Updateproduct from "./pages/Updateproduct";
import "./css/style.css";
import NavBar1 from "./components/NavBar1";
import Footer from "./components/Footer";
import LoginUser from "./pages/LoginUser";
import RegisterUser from "./pages/RegisterUser";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminDashboard";
import HomeAdmin from "./pages/HomeAdmin";
import About from "./pages/About";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <div>
      <NavBar1 />
      <div className="mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/forget" element={<Forgetpass />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="createProdcuct" element={<CreateProduct />} />
            <Route path="AdminHome" element={<HomeAdmin />} />
            <Route path="ManagingProducts" element={<ManagingProducts />} />
            <Route path="ManagingProducts/updateProdcuct/:id" element={<Updateproduct />} />

            <Route path="users" element={<AllUser />} />
          </Route>
          <Route path="/shop" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
