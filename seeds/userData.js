const { User } = require('../models')

const userData = [

    {
        username: "BookLover57",
        email: "books5ever@gmail.com",
        password: "password123456789"
    },
]

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;