const express = require('express');
const BookController = require('../controllers/BookController');
const router = express.Router();

router.post('/create', BookController.createBook);
router.get('/all', BookController.getAllBooks);
router.get('/:id', BookController.getBooksById)
router.put('/:id/stock', BookController.updateStockedQuantity)
router.delete('/delete/:id', BookController.deleteBook)


module.exports = router;