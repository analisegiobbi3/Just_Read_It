const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, User, Comment } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) =>{
    try{
        const bookData = await Book.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'book_cover',
                'book_title',
                'author',
                'user_id',
                'created_at',
            ],
            // include: [
            //     {
            //         model: User,
            //         attributes: ['username'],
            //     },
            // ]
        })
        const books = bookData.map((book) => book.get({ plain: true }))
        console.log(books)
        res.render('profile', {
            books,
            logged_in: req.session.logged_in
        })
    }catch(err){
        res.status(500).json(err)
    }
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try{
        const yourBookData = await Book.findByPk(req.params.id, {
            attributes: [
                'id',
                'book_cover',
                'book_title',
                'author',
                'user_id',
                'created_at',
            ],
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        if (!yourBookData){
            res.status(404).json({ message: 'There are no Books with this id' })
            return
        }
        const book = yourBookData.get({ plain: true });
        res.render('editbook', {
            book,
            logged_in: true
        });

    }catch(err){
        res.status(500).json(err)
    }
});

//renders the post page so you can post a blog post
router.get('/post/', withAuth, async (req, res) =>{
    try{
        const yourBookData = await Book.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'book_cover',
                'book_title',
                'author',
                'user_id',
                'created_at',
            ],
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        })
        const books = yourBookData.map(book => book.get({ plain: true }))
        res.render('post', { books, logged_in: true })
    }catch(err){
        res.status(500).json(err)
    }
    
})

router.get('/findBooks', (req, res) => {
    res.render('findBooks')
})

module.exports = router;