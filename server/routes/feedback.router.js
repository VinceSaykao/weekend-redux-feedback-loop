const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req,res) => {
    console.log('GET /api/feedback');
    pool.query('SELECT * from "feedbacks";')
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('Error GET /api/feedbacks', error)
        res.sendStatus(500);
    });
})