import React, { useEffect, useState } from "react";

import axios from "axios";
function Products() {
  const [prodcuts, setProdcuts] = useState([]);
  useEffect(() => {
    getAllProduct();
  });
  function getAllProduct() {
    axios
      .get("http://localhost:4000/product/products")
      .then((Response) => {
        setProdcuts(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  return (
    <div className="d-flex justify-content-between p-4">
      {prodcuts.map((prodcut) => (
        <div key={prodcut.id} className="card" style={{ width: "18rem" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7feMZ658JjeBN_oFZvSvNNseGv6ZhnVV5tXAR2kkpPIp_pYmza59qP1_-5PxNyTWP36M&usqp=CAU" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{prodcut.name}</h5>
            <p className="card-text">{prodcut.description}</p>
            <p className="card-text">{prodcut.price}</p>
            <p className="card-text">{prodcut.category}</p>
            <button type="button" className="btn btn-primary">add to cart</button>
            
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
}

export default Products;
