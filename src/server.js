const express = require("express");
const app = express();
require("dotenv").config();
const User = require("./db/models/userModel");
const userRouter = require("./db/routes/userRoutes");
const bookRouter = require("./db/routes/bookRoutes");
const Book = require("./db/models/bookmodels");
const cors = require("cors")

app.use(cors());
const synctables = () => { 
 User.sync ({
    alter: true
 })    
  Book.sync({
    alter : true
})
 
}
synctables();
//
app.use(express.json());
const port = 5001 | process.env.PORT
app.use(userRouter);
app.use(bookRouter);


app.get("/health", (req, res) => res.status(200).send("API is healthy"));
app.listen(port, () => {console.log(`Server is running on port ${port}`)})