import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/prodcutSlice";
import '../css/createProd.css'
function CreateProduct() {
  const [productImg, setproductImg] = useState("");
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const product = {name,description,price,category,image:productImg }
  console.log(productImg)
  const addingProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
  }
  const handleProductImg = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };
  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setproductImg(reader.result);
      };
    } else {
      setproductImg("");
    }
  };
  return (
    <div>
      <h2>create a product </h2>
      <div className="p-5 m-5">
        <form>
        <div className=" mb-4">
            <input type="text" id="form6Example3" className="form-control" onChange={(e)=> setName(e.target.value)} />
            <label className="form-label" for="form6Example3">
              name
            </label>
          </div>
            
            

          <div className=" mb-4">
            <input type="text" id="form6Example3" className="form-control" onChange={(e)=> setDescription(e.target.value)} />
            <label className="form-label" for="form6Example3">
              description
            </label>
          </div>

          <div className=" mb-4">
            <input type="text" id="form6Example4" className="form-control" onChange={(e)=> setPrice(e.target.value)} />
            <label className="form-label" for="form6Example4">
              price:
            </label>
          </div>

          <div className=" mb-4">
            <input type="text" className="form-control" onChange={(e)=> setCategory(e.target.value)} />
            <label className="form-label" for="form6Example5">
              category:
            </label>
          </div>
          <div className=" mb-4">
          <div className="form-check d-flex justify-content-start mb-4">
            <input type="file" accept="image/" onChange={handleProductImg} />
            <img src={productImg} alt="product-Img" height={80} width={80} />
          </div>
            </div>
          <button type="submit" className=" btCreat mb-4" onClick={(e)=> addingProduct(e)}>
            create product
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
