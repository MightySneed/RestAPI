const Book = require("../models/bookmodels");

async function deleteBook(req,res) {
    try {
        const query = await Book.destroy({
        where: {
        title: req.body.title,
        truncate: true} //added truncate to vacate freed ID numbers
        
    })
    console.log(query);
    res.status(200).json(`${req.body.title} succesfully removed.`)

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = deleteBook;