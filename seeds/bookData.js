const { Book } = require('../models')

const bookData = [
    {
        book_title: "On the Road",
        author: "Jack Kerouac",
        user_id: 1
    },
]

const seedBookData = () => Book.bulkCreate(bookData);

module.exports = seedBookData;
