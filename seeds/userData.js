const { User } = require('../models')

const userData = [
    {
        username: "bookLover12345",
        email: "testemail@gmail.com",
        password: "Password123456"
    },
]

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;