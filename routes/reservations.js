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
        const room = rows;
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

router.get('/:room_id/:date', (req, res, next) => {
    // if (req.app.locals.userid === null){
    //     req.flash('danger', 'Please signin first.');
    //     return res.redirect('back');
    // }

    const room_id = req.params.room_id;
    const date = req.params.date;

    // conn.query('SELECT * FROM reservation WHERE room_id=?', [room_id], (err, rows, field) => {
    //     if(rows == null) {
    //         req.flash('danger', '잘못된 접근입니다.');
    //         return res.redirect('back');
    //     }
    // });

    conn.query('SELECT * FROM reservation WHERE room=? ORDER BY start', [room_id], (err, rows, field) => {
        if(err) {
            req.flash('danger', err);
            return res.redirect('back');
        }
        if(rows == null) {
            return res.redirect('back');
        }

        const reservations = rows;

        res.render('reservations/new_time', {reservations: reservations, room_id: room_id, date: date});
    })
})

router.post('/', function (req, res, next) {
    console.log('여긴 오니??', req.body.date, req.body.room)
    var date = req.body.date
    res.redirect(`/reservations/${req.body.room}/${date}`)
})

router.post('/:room_id/:date', function(req, res, next){
    conn.query('insert into reservation(name, stdID, room, date, start, \
        end, people_num, purpose) values (?, ?, ?, ?, ?, ?, ?, ?);',
        [req.app.locals.username, req.app.locals.userid, req.params.room_id, req.params.date,
        req.body.start, req.body.end, req.body.numOfPp, req.body.purpose],
        function (err, info) {
            if (err == null){
                res.redirect('/');
            } 

            else res.status(503).json(err);
        });
})

module.exports = router;
