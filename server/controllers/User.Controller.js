const pool = require('../models/db');

module.exports = {

    userprofiletodb(req, res, next) {
        const values = [
            req.body.profile.nickname,
            req.body.profile.email,
            req.body.profile.email_verified,
            req.body.profile.updated_at
        ]
        pool.query(`INSERT INTO users(username, email, email_verified, last_login, date_created)
              VALUES($1, $2, $3, $4, NOW())
              ON CONFLICT DO NOTHING`, values,
            (q_err, q_res) => {
                res.json(q_res.rows)
            })
    },

    userprofilefromdb(req, res, next) {
        const email = req.query.email
        console.log(email)
        pool.query(`SELECT * FROM users
              WHERE email=$1`, [email],
            (q_err, q_res) => {
                res.json(q_res.rows)
            })
    },
    userposts(req, res, next) {
        const user_id = req.query.user_id
        console.log(user_id)
        pool.query(`SELECT * FROM posts
              WHERE user_id=$1`, [user_id],
            (q_err, q_res) => {
                res.json(q_res.rows)
            })
    },

    otheruserprofilefromdb(req, res, next) {
        // const email = [ "%" + req.query.email + "%"]
        const username = String(req.query.username)
        pool.query(`SELECT * FROM users
              WHERE username = $1`,
            [username], (q_err, q_res) => {
                res.json(q_res.rows)
            });
    },
    otheruserposts(req, res, next) {
        const username = String(req.query.username)
        pool.query(`SELECT * FROM posts
              WHERE author = $1`,
            [username], (q_err, q_res) => {
                res.json(q_res.rows)
            });
    },


}