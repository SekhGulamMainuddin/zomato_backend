const express= require("express");
const mongoose= require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to MongoDB");
}).catch((e)=>{
    console.log(e);
});

app.use(express.json());

app.listen(PORT, "0.0.0.0", ()=>{
    console.log(`connected to ${PORT}`)
});