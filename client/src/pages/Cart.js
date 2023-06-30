import React, { useEffect, useState } from "react";
import "../css/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/prodcutSlice";
import { Link } from "react-router-dom";
import { addtoCart } from "../redux/slices/cartSlice";
import axios from "axios";
function Cart() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [category, setCategory] = useState("");
  const product = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className=" mb-5">
      <div className="container-cart ">
        <div className="header-cart mb-2">
          <h1>Notre carte</h1>
          <p>No excuses, treat yourself: there's something for everyone!</p>
          <input
            type="text"
            className="serachbarCart"
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Search by category"
          />
        </div>
        <div>
          <div className="d-flex ">
            <div className="col-md-3  ">
              <ul class="list-group"></ul>
            </div>
            <div className="products-cart col-md-5">
              {product
                .filter((product) => {
                  return category.toLowerCase() === ""
                    ? product
                    : product.category
                        .toLowerCase()
                        .includes(category.toLowerCase());
                })
                .map((product) => (
                  <div className="product-cart" key={product._id}>
                    <div className="image-cart">
                      <img src={product.image?.secure_url} alt="product-Img" />
                    </div>
                    <div className="namePrice d-flex">
                      <div className="d-f">
                        <h3>{product.name}</h3>
                        <p>{product.category}</p>
                      </div>
                      <span>{product.price}DT</span>
                    </div>
                    <p className="desc">
                      fekfh efihzf eifzifhzei iezfhzeifh zefhize fhezifheiz
                      hfiezhf izhfzeif heifzeifhzeifhzeifhziefh ief iefzeifh{" "}
                    </p>

                    <div className="bay">
                      {auth.user && auth.isLogin === true ? (
                        <button
                          className="bynow"
                          onClick={() => dispatch(addtoCart(product))}
                        >
                          {" "}
                          Add to cart{" "}
                        </button>
                      ) : (
                        <Link to="/login" className="bynow">
                          buy now{" "}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
