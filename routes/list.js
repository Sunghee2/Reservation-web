const express = require('express');
const router = express.Router();
const conn = require('./db');
const catchErrors = require('../public/javascript/async-error');

function needAuth(req, res, next) {
    if (req.app.locals.userid === null) {
        req.flash('danger', 'Please signin first.');
        return res.redirect('back');
    } else {
        next();
    }
}

router.get('/', needAuth, catchErrors(async (req, res, next) => {
    var sql = 'SELECT * FROM reservation WHERE stdID=?';
    const stdid = req.app.locals.userid;
    conn.query(sql, stdid, (err, rows, field) => {
        if(err) {
            req.flash('danger', err);
            return res.redirect('back');            
        }
        const reservations = rows;
        console.log("reservations", reservations);
        res.render('reservation_list', {reservations:reservations});
    })}
));

router.get('/:id/detail', needAuth, catchErrors(async (req, res, next) => {
<<<<<<< HEAD
    var sql = 'SELECT * FROM reservation JOIN room ON reservation.room=room.room_num WHERE stdID=? AND reservation.id=?';
=======
    var sql = 'SELECT * FROM room JOIN reservation ON reservation.room=room.room_num WHERE stdID=? AND reservation.id=?';
>>>>>>> 95141c36672322cd68951fb01ba6f134ad1a4635
    const stdid = req.app.locals.userid;
    const rid = req.params.id;
    conn.query(sql, [stdid, rid], (err, rows, field) => {
        if(err) {
            req.flash('danger', err);
            return res.redirect('back');
        }
        const myr = rows;
        console.log("myr", myr);
        res.render('reservation_detail', {myr:myr});
    })}
));

module.exports = router;