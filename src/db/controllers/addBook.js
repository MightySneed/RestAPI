const Book = require("../models/bookmodels");

async function addBook(req,res) {
    try {
       const output = await Book.create({
            title : req.body.title,
            author : req.body.author,
            genre : req.body.genre
        })
        console.log(output);
        res.status(200).json(`${req.body.title} by ${req.body.author} been added.`)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports = addBook;