const db = require('../models/db');

//=========================
//  Bloodcenter controllers
//=========================

exports.readAllBloodGroup = (req, res,) => {
    db.query(`SELECT * FROM bloodgroup ORDER BY bg_id ASC`)
        .then(result => {
            // Send books extracted from database in response
            console.log(result.rows)
            res.status(200).send({ bg: result.rows })
        })
        .catch(q_err => {
            console.log({ Error: q_err.message })
            res.status(500).send({ Error: q_err.message }) //DB ERROR
        })
}
exports.readBloodGroupByID = (req, res, next) => {
    const id = req.query.id;
    let bcDetail = {}
    let bgDetail = {};
    db.query(`SELECT * FROM bloodcenter 
                WHERE blood_group = $1 ORDER BY blood_group ASC`, [id])
        .then(bcresult => {
            // Send blood center extracted from database in response

            bcDetail = bcresult.rows
            db.query(`SELECT bg, rhd FROM bloodgroup 
                 WHERE bg_id = $1`, [id])
                .then(bgresult => {
                    bgDetail = bgresult.rows
                    console.log({ bc: bcDetail, bg: bgDetail })
                    res.status(200).send({ bg: bgDetail, bc: bcDetail })
                })




        })
        .catch(q_err => {
            console.log({ Error: q_err.message })
            res.status(500).send({ Error: q_err.message }) //DB ERROR
        })
}