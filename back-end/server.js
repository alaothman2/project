const express = require("express");
const connectDB = require("./config/conncetDB");
const app = express();
app.use(express.json({limit:"5mb"}));
const cors = require("cors");
app.use(cors());



const userRoutes =  require("./routes/user") 
app.use("/user", userRoutes);

const productRoutes = require("./routes/product") 
app.use("/product", productRoutes);



connectDB(); 
// Invoke the connectDB function
app.listen(4000, () => console.log(`Listening on ${4000}`));
