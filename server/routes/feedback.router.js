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


router.post('/', (req,res) => {
        console.log('POST', req.body);
        let queryText = (`INSERT INTO "feedbacks" ("feeling","understanding","supported","comments") VALUES
        ($1,$2,$3,$4);`);
        pool.query(queryText, [req.body.feedbacks, req.body.understanding, req.body.supported,req.body.comments])
        .then((result) => {
                res.sendStatus(201);
            })
            .catch((error) => {
                    console.log('Error GET /api/feedbacks', error)
                    res.sendStatus(500);
                });
            })







            
            module.exports = router;


            // router.post('/api/feedback', async (req, res) => {
//     const client = await pool.connect();

//     try {
//         const {
//             feeling,
//             understanding,
//             supported,
//             comments
//         } = req.body;
//         await client.query('BEGIN')
//         const orderInsertResults = await client.query(`INSERT INTO "feedbacks" ("feeling","understanding","supported","comments") VALUES
//         VALUES ($1, $2, $3, $4)
//         RETURNING id;`, [feeling,understanding,supported,comments]);

//         await client.query('COMMIT')
//         res.sendStatus(201);
//     } catch (error) {
//         await client.query('ROLLBACK')
//         console.log('Error POST /api/order', error);
//         res.sendStatus(500);
//     } finally {
//         client.release()
//     }
// });