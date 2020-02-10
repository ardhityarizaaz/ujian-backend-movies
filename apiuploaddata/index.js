const express = require ('express')
const app = express()
const BodyParser =require('body-parser')
const cors = require('cors')
const bearerToken = require('express-bearer-token')

const PORT = 2020

app.use(cors())
app.use(bearerToken())
app.use(BodyParser.json())

app.get('',(req,res)=>{
    return res.status(200).send(`<h1>selamat datang di API ini </h1>`)
})

const {productRouter} = require('./routers')

app.use('/movies',productRouter)
app.use('/categories',productRouter)

app.listen(PORT,()=>console.log('aktif di port' + PORT))