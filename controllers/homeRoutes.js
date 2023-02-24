const router = require('express').Router();
const sequelize = require('../config/connection');

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