var express = require('express')
var router = express.Router();

router.get('/signin', (req, res, next) => {
    res.render('signin');
});

router.post('/signin/1', (req, res, next) =>  {
    req.app.locals.user = "1";
    res.redirect('back')
});

router.post('/signin/2', (req, res, next) =>  {
    req.app.locals.user = "2";
    res.redirect('back')
});

router.get('/signout', (req, res) => {
    req.app.locals.user = null;
    res.redirect('/')
})

module.exports = router;