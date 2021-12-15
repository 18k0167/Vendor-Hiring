const express = require('express')
const app = express()
const client = require('../database/connection')
var ObjectID=require('mongodb').ObjectID;

// const { db } = require('./database/User')
app.use(express.json({extended:true}))

const update_status=(req,res)=>{
    console.log(req.body._id);
   db1 = client.db('Hiring')
   newone = {$set:{status:req.body.status}}
    
    db1.collection('bookings').updateOne({_id:ObjectID(req.body._id)},newone,(err,result)=>{
        if(err)
        return res.status(400).send('Error Updating Information')
        console.log('Status Updated')
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
module.exports = update_status