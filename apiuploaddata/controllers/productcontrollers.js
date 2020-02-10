const {mysqldb} = require('../connections')

module.exports={

    postmovies:(req,res)=>{
        var sql = `insert into movies set ?`
        mysqldb.query(sql,req.body,(err,result)=>{
            if(err) return res.status(500).send(err)
            console.log('masuk')
            console.log(result)
            sql = 'select * from movies'
            mysqldb.query(sql,(err1,result1)=>{
                if(err1) return res.status(500).send(err1)
                console.log(result1)
                return res.status(200).send(result1)
            })
        })
    },

    postcategories:(req,res)=>{
        var sql = `insert into categories set ?`
        mysqldb.query(sql,req.body,(err,result)=>{
            if(err) return res.status(500).send(err)
            console.log('masuk')
            console.log(result)
            sql = 'select * from categories'
            mysqldb.query(sql,(err1,result1)=>{
                if(err1) return res.status(500).send(err1)
                console.log(result1)
                return res.status(200).send(result1)
            })
        })
    },

    editmovies:(req,res)=>{
        console.log(req.params.id)
        console.log(req.body)

        let {nama, tahun, description} = req.body

        let updatefilm = {
            nama,
            tahun,
            description
        }

        let sql = `UPDATE movies SET ? WHERE id = ?`
        mysqldb.query(sql, [updatefilm, req.params.id], (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })

    },

    editcategories:(req,res)=>{
        console.log(req.params.id)
        console.log(req.body)

        let {nama} = req.body

        let updatecategories = {
            nama
        }

        let sql = `UPDATE categories SET ? WHERE id = ?`
        mysqldb.query(sql, [updatecategories, req.params.id], (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })

    },

    hapusmovies: (req, res) => {
        console.log(req.params.id)

        let sql = `DELETE FROM movies WHERE id = ?`

        mysqldb.query(sql, req.params.id, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },

    hapuscategories: (req, res) => {
        console.log(req.params.id)

        let sql = `DELETE FROM categories WHERE id = ?`

        mysqldb.query(sql, req.params.id, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    }


}