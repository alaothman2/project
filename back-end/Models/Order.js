const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      count: {
        type: Number,
        required: true,
      },
    },
  ],
  email:{
    type : String,
    required: true,
  } , 
  total: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
