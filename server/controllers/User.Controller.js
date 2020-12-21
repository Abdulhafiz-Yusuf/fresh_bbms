const pool = require('../models/db');


//=========================
//  User controllers
//=========================


export function checkIfUserExistinDB(req, res, next) {
    const email = req.body.user.email;
    console.log(email)
    pool.query(`SELECT * FROM users
              WHERE email=$1`, [email])
        .then(q_res => {
            if (!q_res.rows) res.status(200).send({ userExist: false });   //USER DOEST NOT EXIST
            res.status(200).send({ userExist: true }); //USER EXIST
        })
        .catch(err => res.json(err)) //DB ERROR
    //if (q_res.rows) 
    // if (q_err) return res.json({ success: false, err }); //DB ERROR
    // if (!q_res.rows) res.status(200).send({ userExist: false }); //USER DOEST NOT EXIST
    // if (q_res.rows) res.status(200).send({ userExist: true }); //USER EXIST
    //.catch((q_err) => res.status(500).send({ msg: 'Server Error', error: q_err.message }))
}
export function getuserFullInfo(req, res, next) {
    const email = req.body.user.email;
    console.log(email)
    pool.query(`SELECT * FROM users
              WHERE email=$1`, [email], (q_err, q_res) => {
        if (q_err) return res.json(q_err); //DB ERROR
        res.status(200).send({ user: q_res.rows }); //USER FULL INFO 
    })

}

export function regCompletion(req, res, next) {
    const values = [
        req.body.data.username,
        req.body.data.email,
        req.body.data.email_verified,
        req.body.data.last_login,
        req.body.data.phone,
        req.body.data.user_loc_state,
        req.body.data.loc_lga,
        req.body.data.donor,
        req.body.data.bg
    ]
    pool.query(`INSERT INTO 
    users(username,email,email_verified,date_created,last_login,phone,user_loc_state,loc_lga,donor,bg)
              VALUES($1, $2, $3, NOW(), $4, $5, $6, $7, $8, $9 )
              ON CONFLICT DO NOTHING`, values
    )
        .then(q_res => {
            // Send user extracted from database in response
            console.log(result)
            res.json(q_res.rows)
        })
        .catch(err => res.json(err)) //DB ERROR

}


exports.userposts = async (req, res, next) => {
    const user_id = req.query.user_id
    console.log(user_id)
    pool.query(`SELECT * FROM posts
              WHERE user_id=$1`, [user_id],
        (q_err, q_res) => {
            res.json(q_res.rows)
        })

}
exports.otheruserprofilefromdb = async (req, res, next) => {
    // const email = [ "%" + req.query.email + "%"]
    const username = String(req.query.username)
    pool.query(`SELECT * FROM users
              WHERE username = $1`,
        [username], (q_err, q_res) => {
            res.json(q_res.rows)
        });
}
exports.otheruserposts = async (req, res, next) => {
    const username = String(req.query.username)
    pool.query(`SELECT * FROM posts
              WHERE author = $1`,
        [username], (q_err, q_res) => {
            res.json(q_res.rows)
        });
}



