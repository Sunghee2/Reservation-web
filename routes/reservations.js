const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const conn = require('./db');

function needAuth(req, res, next) {
    if (req.app.locals.userid === null) {
        req.flash('danger', 'Please signin first.');
        return res.redirect('back');
    } else {
        next();
    }
}

router.get('/', needAuth, (req, res, next) => {
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

router.get('/:room_id/:date', needAuth, (req, res, next) => {
    const room_id = req.params.room_id;
    const date = req.params.date;

    if(req.app.locals.moment(Date.now()).format('YYYY-MM-DD') > date) {
        req.flash('danger', '잘못된 접근입니다.');
        return res.redirect('back');
    }

    conn.query('SELECT * FROM room WHERE room_num=?', [room_id], (room_err, room_rows, room_field) => {
        console.log(room_rows);
        if(room_rows.length == 0) {
            req.flash('danger', '잘못된 접근입니다.');
            console.log("test");
            return res.redirect('back');
        }

        conn.query('SELECT * FROM reservation WHERE room=? AND date=? ORDER BY start', [room_id, date], (err, rows, field) => {
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
    });
})

router.post('/', function (req, res, next) {
    var room = req.body.room
    var date = req.body.date
    res.redirect(`/reservations/${room}/${date}`)
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
