const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../../src/db/models/userModel")
async function checkToken(req,res,next) {
    try {
        const secretKey = process.env.JWT_SECRET_KEY;
        console.log(req.header("Authorization"));
        const token = req.header("Authorization").replace("Bearer ", "");
        const decodedToken = jwt.verify(token,secretKey);
        console.log(decodedToken.username);
        const username = decodedToken.username
        const findResponse = await User.findOne({where:{
            username: username
        }});
        console.log(findResponse);
        if (!findResponse) {
            throw new Error("user no longer in database access denied")
        } else {
            req.body.username = username;
            req.body.email = decodedToken.email;
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
};

module.exports = checkToken;