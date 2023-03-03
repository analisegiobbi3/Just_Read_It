const router = require('express').Router();
const { Book } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth')
const {Akademibokhandeln, Adlibris} = require('book-api')
const fetch = require('node-fetch')



//not sure if we neeed to get all of the book data to post or destroy
router.get('/', async (req, res) =>{
    try{
        const bookData = await Book.findAll({
            attributes: [ 'id','book_cover', 'book_title', 'author', 'user_id'],
        })
        res.status(200).json(bookData)
        
    }catch(err){
        res.status(500).json(err)
    }
})

router.post('/', withAuth, async (req, res) => {
    console.log(req.body.jsonResponse)
    try{
        const newBook = await Book.create({
            book_title: req.body.book_title,
            author: req.body.author,
            book_cover: req.body.jsonResponse.book_cover,
            user_id: req.session.user_id,

        })
        res.status(200).json(newBook)
    }catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

router.get('/:book_title', async (req, res) => {
    const source = new Adlibris();
    let book_cover;
    source.search(req.params.book_title)
    .then(books => {
    source.fetch(books[0]).then(book => {
        console.log(JSON.stringify(book, null, 2));
        book_cover = books[0].cover.url
        res.json({ book_cover: book_cover })
    });
    });
})

router.put('/:id', withAuth, async (req, res) =>{
    try {
        const bookData = await Book.update(
            {
                book_title: req.body.book_title,
                author: req.body.author,
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
        if(!bookData){
            res.status(400).json({ message: "There are no books with this id" })
        }
        res.status(200).json(bookData)
    }catch(err){
        res.status(500).json(err)
    }
})

router.delete('/:id', withAuth, async (req, res) =>{
    try{
        const bookData = await Book.destroy({
            where:{
                id: req.params.id,
            },
        })
        if(!bookData){
            res.status(400).json({ message: "There are no books with this id" })
        }
        res.status(200).json(bookData)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;


