const { User } = require('../models')

const userData = [
    {
        email: "dude@tech.com",
        username: "BooksRLYFE",
        password: "password12345"
    },
]

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;