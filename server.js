const express = require("express");
const app = express();
const db = require("./db")
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require("dotenv").config();


app.get("/", (req,res)=>{
    res.send("hello the server is On.  :) ");
});

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuItemRoutes = require("./routes/menuItemRouter");
app.use('/menu',menuItemRoutes);

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log("The server is working on Port 3000");
})