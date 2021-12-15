const express = require('express')
const app = express()
const client = require('../database/connection')
var ObjectID=require('mongodb').ObjectID;

// const { db } = require('./database/User')
app.use(express.json({extended:true}))

const firstlogin=(req,res)=>{
    console.log(req.body._id);
   db1 = client.db('Hiring')
   newone = {$set:{emp_number:req.body.number,
    job_id:req.body.job_id,
    emp_description:req.body.description,
    rate:req.body.rate}}
    
    db1.collection('employee').updateOne({_id:ObjectID(req.body._id)},newone,(err,result)=>{
        if(err)
        return res.status(400).send('Error Updating Information')
        else 
        res.status(200).send('1')
    })
//    db1.collection('employee').find({emp_email:'k180167@nu.edu.pk'}).toArray((err,result)=>{
//        var size = Object.keys(result[0]).length
//        console.log(size)
//     if(size<6){
        
//         // res.send(req.body)
//     }
//     else
//     res.send('welcome')
//    })
}
module.exports = firstlogin