const Book = require('../models/Book');


// create a new book
exports.createBook = async (bookDetails,res) => {
    try {
        const { title, author, price, isbn, stockedQuantity, checkedOutQuantity } = bookDetails;

        if(!title || !author || !price || !isbn || !stockedQuantity || !checkedOutQuantity) {
            return res.status(400).json({ message: "Please provide all the book details" });
        }

        const book = await Book.create({
            title,
            author,
            price,
            isbn,
            stockedQuantity,
            checkedOutQuantity
        });
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ error: "Unable to create new book", err });
    }
};

// get all books

exports.getAllBooks = async () => {
    try {
        allBooks= await Book.findAll();
        return allBooks;
    }catch(err){
        throw new Error("Error getting all books: " + err)
    }

};

// get books by id

exports.getBooksById = async (id) => {
    try {
        const book = await Book.findByPk(id);
        if(!book){
            throw new Error("Unable to find book");
        }
        return book;
    }catch(err){
        throw new Error("Error getting book by id: " + err);
    }

};

// update stocked quantities

exports.updateStockedQuantity = async (bookId, stockedQuantity) =>{
    try{
        const [updatedStockedQuantity] = await Book.update(
            { stockedQuantity },
            { where: { id: bookId } }
        );

        if(updatedStockedQuantity === 0){
            throw new Error("Unable to update stocked quantity");
        }

        const updatedBook = await Book.findByPk(bookId);
        return updatedBook;
    
    }catch(err){
        throw new Error('Error updating Stocked Quantity: ' + err.message);
    }
};

// delete Book

exports.deleteBook = async (id)=>{
    try{
        if(!id){
            throw new Error("Book id is required");
        }
        const deletedBook = await Book.destroy({
            where: {id:id},
        });
        if(deletedBook === 0){
            throw new Error("Book not found or already deleted");
        }
        return { message: "Book deleted successfully" };

    }catch(err){
        throw new Error('Error deleting book: ' + err.message);
    }
    
}