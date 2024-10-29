const Book = require("../models/bookmodels");

async function upAuthor(req,res) {
    try {
        const  append = await Book.update(
        {author: req.body.author},
        {where: {title: req.body.title}}
    );
        console.log(append);
        res.status(200).json(`The author of ${req.body.title}, has been changed to ${req.body.author}`);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = upAuthor;