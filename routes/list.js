const express = require('express');
const router = express.Router();
const conn = require('./db');

router.get('/', (req, res, next) => {
    if (req.app.locals.userid === null){
        req.flash('danger', 'Please signin first.');
        return res.redirect('back');
    }

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
    })
}) 
 
module.exports = router;
