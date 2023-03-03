const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, User, Comment } = require('../models');

router.get('/', async (req, res) => {
    try{
        const bookData = await Book.findAll({
            attributes: [
                'id',
                'book_cover',
                'book_title',
                'author',
                'user_id',
            ],
            // order: ['created_at', 'DESC'],
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ]
        });
        const books = bookData.map((book) => book.get({ plain: true }));
        res.render('homepage', {
            books,
            logged_in: req.session.logged_in
        });
    }catch(err){
        res.status(500).json(err)
    }
});

router.get('/login', (req, res) => {
    if(req.session.logged_in){
        res.redirect('/profile')
    }
    res.render('login')
})

router.get('/signup', (req, res) => {
    if(req.session.logged_in){
        res.redirect('/profile')
    }
    res.render('signup')
})

module.exports = router;