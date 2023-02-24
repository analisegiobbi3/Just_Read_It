const router = require('express').Router();

const apiRouter = require('./api');
const homeRouter = require('./homeRoutes.js');
const profileRouter = require('./profileRoutes.js');


router.use('/', homeRouter);
router.use('/api', apiRouter);
router.use('/profile', profileRouter);

router.use((req, res) =>{
    res.status(404).end()
})

module.exports = router;
