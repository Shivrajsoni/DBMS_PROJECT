// routes/books.js
const express = require('express');
const BooksController = require('../Controllers/booksControllers');

const router = express.Router();

router.get('/', BooksController.getAllBooks);
router.post('/', BooksController.addBook);
router.delete('/:id', BooksController.deleteBook);

module.exports = router;
