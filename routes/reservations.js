const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const conn = require('./db');

router.get('/', (req, res, next) => {
    if (req.app.locals.userid === null){
        req.flash('danger', 'Please signin first.');
        return res.redirect('back');
    }

    var sql1 = 'SELECT * FROM reservation; SELECT * FROM room';
    conn.query(sql1, (err, rows, field) => {
        if(err) {
            req.flash('danger', err);
            return res.redirect('back');
        }
        const reservations = rows[0];
        const room = rows[1];
        console.log("rs",reservations);
        console.log("room", room);
        res.render('reservation_form', {room: room, reservations: reservations});
    })
})

router.post('/', function(req, res, next){
    console.log(req.body)
    conn.query('insert into reservation(name, stdID, room, date, start, \
        end, people_num, purpose) values (?, ?, ?, ?, ?, ?, ?, ?);',
        [req.app.locals.username, req.app.locals.userid, req.body.room, req.body.date,
        req.body.start, req.body.end, req.body.numOfPp, req.body.purpose],
        function (err, info) {
            if (err == null){
                res.redirect('/');
            } 
            // else res.redirect('back');
            else res.status(503).json(err);
        });
})

module.exports = router;
