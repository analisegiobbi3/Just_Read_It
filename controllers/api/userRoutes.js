const router = require('express').Router();
const { User, Book } = require('../../models');
const session = require('express-session');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) =>{
    try{
        const userData = await User.findAll({
            attributes: { exclude:['password']}
        })
        res.status(200).json(userData)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) =>{
    try{
        const userData = await User.findByPk(req.params.id, {
            attributes: { exclude:['password']},
            include: [
                {
                    model: Book,
                    attributes: [ 'id', 'book_cover','book_title', 'author', 'user_id'],

                }

            ]
        })
        if (!userData){
            res.status(404).json({ message: 'There are no users with this id '})
        }
        res.status(200).json(userData)
    }catch(err){
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) =>{
    try{
        const userData = await User.create(req.body)
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;
            res.status(200).json(userData)
        })
    }catch(err){
        res.status(500).json(err)
    }
})

router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({ where: { username: req.body.username }});

        if (!userData) {
            res.status(400).json({ message: 'Incorrect username or password, please try again.'})
            return
        }

        const validPassword =  await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect username or password, please try again.'})
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;
            res.json({ user: userData, message: 'You are now logged into the website'});
        })
    }catch(err){
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res) =>{
    if(req.session.logged_in) {
        req.session.destroy(() =>{
            res.status(204).end();
        })
    }else{
        res.status(404).end()
    }
})

module.exports = router;