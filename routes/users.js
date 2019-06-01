var express = require('express')
var router = express.Router();

router.get('/signin', (req, res, next) => {
    res.render('signin');
});

router.post('/signin/1', (req, res, next) =>  {
    req.app.locals.userid = "60191600";
    req.app.locals.username = "최리안";
    req.flash('success', 'Welcome, 최리안!');
    res.redirect('back')
});

router.post('/signin/2', (req, res, next) =>  {
    req.app.locals.userid = "60191699";
    req.app.locals.username = "이성희";
    req.flash('success', 'Welcome, 이성희!');
    res.redirect('back')
});

router.get('/signout', (req, res) => {
    req.app.locals.userid = null;
    req.app.locals.username = null;
    req.flash('success', 'Successfully signed out');
    res.redirect('/')
})

module.exports = router;