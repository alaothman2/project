const express = require("express");
const connectDB = require("./config/conncetDB");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());



const userRoutes =  require("./routes/user") 
app.use("/user", userRoutes);




connectDB(); 
// Invoke the connectDB function
app.listen(4000, () => console.log(`Listening on ${4000}`));
