import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/MangingProd.css"
function ManagingProducts() {
  const [prodcuts, setProdcuts] = useState([]);
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
  useEffect(() => {
    getAllProduct();
  });
  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/product/delet-product/${id}`,
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      getAllProduct();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <section className="intro">
          <div className="bg-image h-100">
            <div className="mask d-flex align-items-center h-100">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-hover mb-0">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">image</th>
                                <th scope="col">Description</th>
                               
                                <th scope="col">price</th>
                                <th scope="col">category</th>
                                <th scope="col"></th>
                                
                              </tr>
                            </thead>
                            {prodcuts.map((prodcut) => (
                              <tbody key={prodcut.id}>
                                <tr>
                                  <th scope="row">{prodcut.name}</th>
                                  <td>
                                    <span className="text-success ">
                                    <img height={40}  src={prodcut.image?.secure_url} alt="product-Img" />
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-danger">
                                      <span>{prodcut.description}</span>
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-success">
                                      <span>{prodcut.price}DT</span>
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-success">
                                      <span>{prodcut.category}</span>
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-danger ">
                                      <Link to={`updateProdcuct/${prodcut._id}`} className="edit">Edit</Link>
                                      <button
                                        type="button"
                                        className="delete"
                                        onClick={() => {
                                          deleteUser(prodcut._id);
                                        }}
                                      >
                                        delet
                                      </button>
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            ))}
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ManagingProducts;
