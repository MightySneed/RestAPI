const {Router} = require("express")

const bookRouter =  Router();


// import a function to add a book =addBook.js
const addBook = require("../controllers/addBook");
// import a function to list all books =listAllBooks.js
const listBooks = require("../controllers/listAllBooks");
// import a function to update the author name on any specific book = updateAuthor.js
const upAuthor = require("../controllers/updateAuthor");
// import a function to udpate the genre of a book = updateGenre.js
const upGenre = require("../controllers/updateGenre");
// import a function to delete a book = deleteBook.js
const deleteBook = require("../controllers/deleteBook");
// import a function to list the details of an individual book =getBook.js
const getBook = require("../controllers/getBook");
// import a function to delete all books = deleteAllBooks.js
const deleteAll = require("../controllers/deleteAllBooks");
const checkPassword = require("../../middleware/checkPassword");
const checkToken = require("../../middleware/checkToken");


bookRouter.post("/addBook", checkToken, addBook);
bookRouter.post("/listAllBooks",checkToken, listBooks);
bookRouter.put("/updateAuthor", checkToken, upAuthor);
bookRouter.put("/updateGenre", checkToken, upGenre);
bookRouter.delete("/deleteBook", checkToken, deleteBook);
bookRouter.delete("/deleteAllBooks", checkToken, deleteAll);
bookRouter.get("/getBook", getBook);

module.exports = bookRouter;