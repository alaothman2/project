import React, { useState } from "react";
import { BiMinusCircle } from "react-icons/bi";
import { FiPlusCircle } from "react-icons/fi";
import { BsFillTrash3Fill } from "react-icons/bs";
import { GrClearOption } from "react-icons/gr";
import "../css/BagShop.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decCount,
  deleteProd,
  incCount,
} from "../redux/slices/cartSlice";
import axios from "axios";
function BagShopping() {
  const { cart, total } = useSelector((state) => state.shopCart);
  const [orderPass, setOrderPass] = useState(false);
  const auth = useSelector((state) => state.auth);
  const email = auth.user.email
  const dispatch = useDispatch();
  const createOrder = () => {
    axios.post("http://localhost:4000/user/order", {cart,total,email},{
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }).then((response) => console.log(response.data))
    .catch(error => console.log(error.message))
    dispatch(clearCart())
    setOrderPass(true)
  };
  return (
    <div className="row ">
      <div className=" col-lg-3 card bag  ">
        <div className="card-body  ">
          <div className=" d-flex topbag">
            <h3 className="card-title mb-4">Cart</h3>
            <p className="clear" onClick={() => dispatch(clearCart())}>
              <GrClearOption />
            </p>
          </div>

          <div className="container mt-3 mb-5 itemCON">
            {cart.map((prod) => (
              <div className=" d-flex ">
                <div className="col mt-2">
                  <img
                    className="custom-img-size"
                    src={prod.image.secure_url}
                    alt={prod.image.secure_url}
                  />
                </div>
                <div className="col">
                  <div className="d-flex gap-5">
                    <p className="name-prod">{prod.name} </p>
                    <p onClick={() => dispatch(deleteProd(prod))}>
                      <BsFillTrash3Fill />
                    </p>
                  </div>
                  <div className="d-flex justify-content-between gap-3">
                    <div>
                      <p className="price-prod">{prod.subTotal} Dt </p>
                    </div>
                    <div className="d-flex justify-content-between gap-3">
                      <p onClick={() => dispatch(decCount(prod))}>
                        <BiMinusCircle />
                      </p>
                      <p>{prod.count}</p>
                      <p onClick={() => dispatch(incCount(prod))}>
                        <FiPlusCircle />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="d-flex gap-5">
            <p className="p-3 TOTAL">Total :</p>
            <p className="p-3 TOTALPRICE">{total}dt</p>
            
          </div>
          {
             orderPass ===true ? <p className="alert alert-success forget-err mb-2">Order create successfully we will contact you soon </p> : null
            }
            {total > 0 ? <button onClick={createOrder} className="orderbt"> create an order  </button> : <p className="price-prod text-danger"> You have to add products</p>}
            
        </div>
      </div>
    </div>
  );
}

export default BagShopping;
