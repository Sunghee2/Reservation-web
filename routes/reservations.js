const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const conn = require('./db');

router.get('/', (req, res, next) => {
    conn.query('SELECT * FROM reservation', (err, rows) => {
        if(err) {
            req.flash('danger', err);
            return res.redirect('back');
        }

        const reservations = rows;
        console.log(reservations);
        // res.render('')
    })
})

module.exports = router;