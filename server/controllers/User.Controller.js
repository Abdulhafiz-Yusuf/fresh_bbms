const db = require('../models/db');

module.exports = {

    userprofiletodb(req, res, next) {
        db.query(`SELECT * FROM bloodcenter 
    ORDER BY date_created DESC`, (q_err, q_res) => {
            res.json(q_res.rows)
        })
    },

    userprofilefromdb(req, res, next) {
        const email = req.query.email
        console.log(email)
        db.query(`SELECT * FROM users
              WHERE email=$1`, [email],
            (q_err, q_res) => {
                res.json(q_res.rows)
            })
    },
    userposts(req, res, next) {
        const user_id = req.query.user_id
        console.log(user_id)
        db.query(`SELECT * FROM posts
              WHERE user_id=$1`, [user_id],
            (q_err, q_res) => {
                res.json(q_res.rows)
            })
    },

    otheruserprofilefromdb(req, res, next) {
        // const email = [ "%" + req.query.email + "%"]
        const username = String(req.query.username)
        db.query(`SELECT * FROM users
              WHERE username = $1`,
            [username], (q_err, q_res) => {
                res.json(q_res.rows)
            });
    },
    otheruserposts(req, res, next) {
        const username = String(req.query.username)
        db.query(`SELECT * FROM posts
              WHERE author = $1`,
            [username], (q_err, q_res) => {
                res.json(q_res.rows)
            });
    },


}