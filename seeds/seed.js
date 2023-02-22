const sequelize = require('../config/connection');
const bookSeeds = require('./bookData');
const userSeeds = require('./userData');
const commentSeeds = require('./commentData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n--DATABASE SEEDED=--\n');

    await bookSeeds();
    console.log('\n--BOOK DATA SEEDED=--\n')

    await userSeeds();
    console.log('\n--USER DATA SEEDED=--\n')

    await commentSeeds();
    console.log('\n--COMMENT DATA SEEDED=--\n')

    process.exit(0);
}

seedDatabase();

