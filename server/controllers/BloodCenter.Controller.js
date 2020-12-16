const db = require('../models/db')

exports.readAllBloodcenter = async (req, res, next) => {
    db.query(`SELECT * FROM bloodcenter ORDER BY date_created DESC`)
        .then(result => {
            // Send books extracted from database in response
            console.log(result)
            res.json(result.rows)
        })
        .catch(err => {
            // Send a error message in response
            res.json({ Error: err.message })
        })
}

exports.readBloodCenterbyID = async (req, res, next) => {
    const id = req.params.id
    console.log(id)
    db.query(`SELECT * FROM bloodcenter
              WHERE blood_center_id = $1`, [id])
        .then(userData => {
            // Send books extracted from database in response
            res.json(userData.row)
        })
        .catch(err => {
            // Send a error message in response
            res.json({
                message: `There was an error retrieving blood by id: ${err}`
            })
        })

}


