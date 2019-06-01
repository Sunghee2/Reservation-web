const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const conn = require('./db');

router.get('/', (req, res, next) => {
    if (req.app.locals.userid === null){
        req.flash('danger', 'Please signin first.');
        return res.redirect('back');
    }

    var sql = 'SELECT * FROM room';
    conn.query(sql, (err, rows, field) => {
        if(err) {
            req.flash('danger', err);
            return res.redirect('back');
        }
        const room = rows[1];
        console.log("room", room);
        res.render('reservations/new_room', {room: room});
    })
})

router.get('/dup', (req, res, next) => {
    var sql = 'SELECT * FROM reservation';
    conn.query(sql, (err, rows, field) => {
        const reservations = rows;
        console.log("rs",reservations);
        res.json(reservations);
    })
})


router.get('/:id', (req, res, next) => {
    if (req.app.locals.userid === null){
        req.flash('danger', 'Please signin first.');
        return res.redirect('back');
    }

    const room_id = req.params.id;
    conn.query('SELECT * FROM reservation WHERE room=? ORDER BY start', [room_id], (err, rows, field) => {
        if(err) {
            req.flash('danger', err);
            return res.redirect('back');
        }
        const reservations = rows[0];
        res.render('new_time', {reservations: reservations});
    })
})

// router.post('/', function(req, res, next){
//     console.log(req.body)
//     conn.query('insert into reservation(name, stdID, room, date, start, \
//         end, people_num, purpose) values (?, ?, ?, ?, ?, ?, ?, ?);',
//         [req.app.locals.username, req.app.locals.userid, req.body.room, req.body.date,
//         req.body.start, req.body.end, req.body.numOfPp, req.body.purpose],
//         function (err, info) {
//             if (err == null){
//                 res.redirect('/');
//             } 
//             // else res.redirect('back');
//             else res.status(503).json(err);
//         });
// })



module.exports = router;
