const BookService = require('../services/BookService');

// create a new Book controller

exports.createBook = async (req, res) => {
    try {
        const book = await BookService.createBook(req.body);
        res.status(201).json(book);
    } catch (err) {
        console.error("Book creation failed:", err); // Log error in the console
        res.status(400).json({ message: err.message });
    }
};

// get all books controller

exports.getAllBooks = async (req, res) => {
    try {
        const allbooks = await BookService.getAllBooks();
        res.status(200).json(allbooks);
        } catch (err) {
            res.status(500).json({ message: 'Error fetching all books' });
    }
};

// get books by id

exports.getBooksById = async (req, res) => {
    try {
        const books = await BookService.getBooksById(req.params.id);
        res.status(200).json(books);
    
    } catch (err) {
        res.status(404).json({ message: 'Book not found' });
    }
};

// update stocked quantity controller

exports.updateStockedQuantity = async (req, res) => {
    try {
        const bookUpdate = await BookService.updateStockedQuantity(req.params.id, req.body);
        res.status(200).json(bookUpdate);
        } catch (err) {
        res.status(500).json({ message: "Unable to update stocked quantity" });
    }
};

// delete book controller

exports.deleteBook = async(req, res) => {
    try {
        const bookDelete = await BookService.deleteBook(req.params.id);
        res.status(200).json(bookDelete);
    } catch (err) {
        res.status(500).json({ message: 'Error deleting book' });
    }
};