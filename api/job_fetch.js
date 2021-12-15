const express = require('express')
const app = express()
const client = require('../database/connection')


// const { db } = require('./database/User')
app.use(express.json({extended:true}))

const job_data = (req,res)=>{
    db1 = client.db('Hiring')
    db1.collection('job').find({}).toArray((err,result)=>{
        if(err) return res.status(400).send("0")
        console.log(result)
        res.status(200).send(result)
    })

    
    
}
module.exports = job_data