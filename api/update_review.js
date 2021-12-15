const express = require('express')
const app = express()
const client = require('../database/connection')
var ObjectID=require('mongodb').ObjectID;


app.use(express.json({extended:true}))

const review = (req,res)=>{
    console.log("review module called");
    console.log(req.body.emp_id)
    console.log(req.body.review)
    var rev = 0
    db1 = client.db('Hiring')
    db1.collection('employee').find({emp_id:req.body.emp_id},{review: 1}).toArray((err,result)=>{
        if(err) return res.status(400).send("Server Error")
        if(result.length>0){
            rev = result.review + req.body.review
            rev = rev/2
        }
        else{
            rev = req.body.review
           
        }
        db1.collection('employee').updateOne({_id:ObjectID(req.body.emp_id)},{$set:{review:rev}},(err,result)=>{
            if(err) return res.status(400).send("server error")
        
            res.status(200).send('Review updated')
        })
    })
}
module.exports = review