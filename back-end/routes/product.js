const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");
const isAuth = require("../Middlewares/isAuth");
const isAdmin = require("../Middlewares/isAdmin");
const cloudinary = require("../utilisation/cloudinary");
// Add a new product

router.post("/add-product", isAuth, isAdmin, async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;
    console.log(req.body);
    let product;
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image, {
        upload_preset: "online-shop",
      });
      const { public_id, secure_url } = uploadRes;

      if (uploadRes) {
        req.body.image = {
          public_id: uploadRes.public_id,
          secure_url: uploadRes.secure_url,
        };
        product = new Product(req.body);
      }
    }

    const productNew = await product.save();
    res
      .status(201)
      .json({ message: "Product added successfully", product: productNew });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Update a product
router.put("/update-product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category, productImg } = req.body;
    const updatedProduct = await Product.findById(id);
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    let uploadRes;
    if (productImg) {
      uploadRes = await cloudinary.uploader.upload(productImg, {
        upload_preset: "online-shop",
      });
      req.body.productImg = {
        public_id: uploadRes.public_id,
        secure_url: uploadRes.secure_url,
      }
      
    }
    else {
      req.body.productImg =updatedProduct.image
    }
    updatedProduct.name = name || updatedProduct.name
     updatedProduct.description = description || updatedProduct.description
     updatedProduct.price = price || updatedProduct.price
     updatedProduct.category = category || updatedProduct.category
     

   

    await updatedProduct.save();
    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a product
router.delete("/delet-product/:id", isAuth, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
