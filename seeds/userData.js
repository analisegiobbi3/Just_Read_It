const { User } = require('../models')

const userData = [
    {
        username: "BooksRLYFE",
        email: "dude@tech.com",
        password: "password12345"
    },
]

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;