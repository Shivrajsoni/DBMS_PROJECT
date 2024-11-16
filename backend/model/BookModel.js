// models/booksModel.js
const db = require('../db/connection');

const BooksModel = {
  getAllBooks: (callback) => {
    const query = 'SELECT * FROM books';
    db.query(query, callback);
  },
  addBook: (book, callback) => {
    const query = 'INSERT INTO books (title, author, published_date) VALUES (?, ?, ?)';
    db.query(query, [book.title, book.author, book.published_date], callback);
  },
  deleteBook: (id, callback) => {
    const query = 'DELETE FROM books WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = BooksModel;
