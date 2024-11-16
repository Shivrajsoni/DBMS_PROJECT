// controllers/booksController.js
const BooksModel = require('../model/BookModel');

const BooksController = {
  getAllBooks: (req, res) => {
    BooksModel.getAllBooks((err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  },
  addBook: (req, res) => {
    const { title, author, published_date } = req.body;
    if (!title || !author || !published_date) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const newBook = { title, author, published_date };
    BooksModel.addBook(newBook, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Book added successfully' });
    });
  },
  deleteBook: (req, res) => {
    const { id } = req.params;
    BooksModel.deleteBook(id, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Book deleted successfully' });
    });
  },
};

module.exports = BooksController;
