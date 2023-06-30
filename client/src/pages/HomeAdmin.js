import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import axios from "axios";
import "../css/homeAdmin.css"
function HomeAdmin() {
  const [productCount, setProductCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [orders, setOrders] = useState([]);
  const getOrders = () => {
    axios
      .get("http://localhost:4000/user/orders", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((response) => setOrders(response.data))
      .catch((error) => console.log(error.message));
  };
  useEffect(() => {
    console.log(orders);
    getOrders();
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/product/products");
        const data = await response.json();
        const count = data.length;
        const userResponse = await fetch("http://localhost:4000/user/users", {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        });
        const userData = await userResponse.json();
        const userCount1 = userData.length;
        setUserCount(userCount1);
        setProductCount(count);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-3">
      <div className="container-fluid">
        <div className="row g-3 my-2 ">
          <div className="col-md-4 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{productCount}</h3>
                <p className="fs-5">Products</p>
              </div>
              <p className="p-3 fs-1">
                <FiShoppingCart />{" "}
              </p>
            </div>
          </div>

          <div className="col-md-2 p-1">
           
          </div>

          <div className="col-md-4 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{userCount}</h3>
                <p className="fs-5">Users</p>
              </div>
              <p className="p-3 fs-1">
                <BsFillPeopleFill />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <table class="table caption-top bg-white rounded mt-2">
        <caption className="text-white fs-4">Recent Orders</caption>
        <thead>
          <tr>
            <th scope="col">email user</th>
            <th scope="col">name</th>
            <th scope="col">total price </th>
            
          </tr>
        </thead>
        {orders.map((order) => (
          <tbody>
            <tr>
              <th scope="row">{order.email} </th>
              <td>
                {order.products.map((product) => (
                  <span>
                    <p className="orderitem">
                      <img
                        height={40}
                        src={product?.product.image?.secure_url}
                        alt={product?.product.name}
                      />
                      {product?.product.name} {product?.product.price} dt{" "}
                       x {product.count}
                    </p>
                  </span>
                ))}
              </td>

              <td>{order.total} dt </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default HomeAdmin;
