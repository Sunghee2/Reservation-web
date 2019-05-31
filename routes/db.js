const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const conn = mysql.createConnection(require('../config/db-config.js'));

conn.connect(function(err) {
    if(err) {
        switch(err.code) {
            case 'ER_ACCESS_DENIED_ERROR':
                throw new Error('config/db-config.js 에서 mysql 설정 해주세요.');
        }
    }
});

module.exports = conn;