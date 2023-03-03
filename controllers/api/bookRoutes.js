const router = require('express').Router();
const { Book } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth')

//not sure if we need to get all of the book data to post or destroy
router.get('/', async (req, res) =>{
    try{
        const bookData = await Book.findAll({
            attributes: [ 'id', 'book_title', 'author', 'user_id'],
        })
        res.status(200).json(bookData)
        
    }catch(err){
        res.status(500).json(err)
    }
})

router.post('/', withAuth, async (req, res) => {
    try{
        const newBook = await Book.create({
            book_title: req.body.book_title,
            author: req.body.author,
            user_id: req.session.user_id,
        })
        res.status(200).json(newBook)
    }catch(err){
        res.status(500).json(err)
    }
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


