const Book = require("../models/bookmodels");

async function deleteAll(req,res) {
    try {
        const query = await Book.destroy({
            where: {},
            truncate: true, restartIdentity: true
        });
    console.log(query);
    res.status(200).json(`Every book succesfully removed.`)

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = deleteAll;