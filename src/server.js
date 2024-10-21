const express = require("express");
const app = express();
require("dotenv").config();
const User = require("./db/models/userModel");
const userRouter = require("./db/routes/userRoutes");
 
const synctables = () => { 
 User.sync ({
    alter: true
 })
}
synctables();
//
app.use(express.json());
const port = 5001 | process.env.PORT
app.use(userRouter);

app.get("/health", (req, res) => res.status(200).send("API is healthy"));
app.listen(port, () => {console.log(`Server is running on port ${port}`)})