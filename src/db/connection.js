
const {Sequelize} = require("sequelize");
require("dotenv").config()
const connection = new Sequelize(process.env.MYSQL_URI)


    try {
        connection.authenticate()
        console.log("Succesfully connected to database");
    } catch (error) { 
        console.log(error);
    }


module.exports = connection;