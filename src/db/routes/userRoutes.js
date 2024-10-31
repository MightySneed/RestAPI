const {Router} = require("express");
const userRouter = Router();
const addUser = require("../controllers/addUser");
const hashPassword = require("../../middleware/hashPassword");
const checkPassword = require("../../middleware/checkPassword");
const listAllUsers = require("../controllers/listAllUsers.js");
const login = require("../controllers/login.js");
const checkToken = require("../../middleware/checkToken.js");
 
userRouter.post("/addUser", hashPassword ,addUser);
userRouter.get("/listAllUsers", checkToken, listAllUsers);
userRouter.post("/login", checkPassword, login)
 
module.exports = userRouter;