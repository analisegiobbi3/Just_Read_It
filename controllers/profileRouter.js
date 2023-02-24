const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, User, Comment } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) =>{
    try{
        const bookData = await Book.findAll({
            attributes: [
                'id',
                'book_title',
                'author',
                'user_id',
            ],
        })
        const books = bookData.map((book) => book.get({ plain: true }))
        res.render('profile', {
            books,
            logged_in: req.session.logged_in
        })
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;