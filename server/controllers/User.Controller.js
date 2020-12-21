const pool = require('../models/db');


//=========================
//  User controllers
//=========================


exports.checkIfUserExistIndb = (req, res) => {
    /*
    checkUser in db 
    if exist: return full user info
     else: return userExist false
    */
    const email = req.body.user.email;
    console.log(email)
    pool.query(`SELECT * FROM users
              WHERE email=$1`, [email])
        .then(q_res => {
            if (!q_res.rows) res.status(200).send({ userExist: false, user: 'User does not exist' });   //USER DOEST NOT EXIST
            else res.status(200).send({ userExist: true, user: q_res.rows }) //USER EXIST
        })
        .catch(err => res.json(err)) //DB ERROR

}
exports.regCompletion = (req, res, next) => {
    console.log({ dataToSubmit: req.body })
    const values = [
        req.body.username,
        req.body.email,
        req.body.email_verified,
        req.body.phone,
        req.body.user_loc_state,
        req.body.loc_lga,
        req.body.donor,
        req.body.bg
    ]
    const username = req.body.username;
    pool.query(`INSERT INTO 
    users(username, email, email_verified, phone, user_loc_state, loc_lga, donor, bg, date_created, last_login)
              VALUES($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())
        ON CONFLICT DO NOTHING`, values)
        .then(q_res => {
            if (q_res) {
                // Send user extracted from database in response
                //res.status(200).send({ success: true })
                console.log(username)
                pool.query(`SELECT * FROM users WHERE username=$1`, [username])
                    .then(q_res => {
                        res.status(200).send({
                            success: true,
                            user: q_res.rows //USER FULL INFO 
                        })
                        console.log({ fullUserInfo: q_res.rows })
                    })
                    .catch(q_err => res.json(q_err)) //DB ERROR
            }

        })
        .catch(q_err => {
            res.json(q_err)//DB ERROR
            console.log(q_err.message)
        })
}
// exports.userposts = async (req, res, next) => {
//     const user_id = req.query.user_id
//     console.log(user_id)
//     pool.query(`SELECT * FROM posts
//               WHERE user_id=$1`, [user_id],
//         (q_err, q_res) => {
//             res.json(q_res.rows)
//         })

// }
// exports.otheruserprofilefromdb = async (req, res, next) => {
//     // const email = [ "%" + req.query.email + "%"]
//     const username = String(req.query.username)
//     pool.query(`SELECT * FROM users
//               WHERE username = $1`,
//         [username], (q_err, q_res) => {
//             res.json(q_res.rows)
//         });
// }
// exports.otheruserposts = async (req, res, next) => {
//     const username = String(req.query.username)
//     pool.query(`SELECT * FROM posts
//               WHERE author = $1`,
//         [username], (q_err, q_res) => {
//             res.json(q_res.rows)
//         });
// }



