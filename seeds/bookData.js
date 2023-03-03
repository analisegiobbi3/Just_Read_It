const { Book } = require('../models')

const bookData = [
    {
        book_cover: "https://s2.adlibris.com/images/11979617/the-alchemist-25th-anniversary-edition.jpg",
        book_title: "The Alchemist",
        author: "Paulo Coelho",
        user_id: 1
    }
]

const seedBookData = () => Book.bulkCreate(bookData);

module.exports = seedBookData;
