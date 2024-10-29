const Book = require("../models/bookmodels");

async function getBook(req,res) {

    try {
        const query = await Book.findOne({
            where: {
            title: req.body.title}
        })
        console.log(query);
        res.status(200).json(query)

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = getBook;