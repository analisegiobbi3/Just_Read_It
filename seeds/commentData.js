const { Comment } = require('../models')

const commentData = [
    {
        user_id: 1,
        book_id: 1,
        text: "This book sucks",
    },
]


const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;