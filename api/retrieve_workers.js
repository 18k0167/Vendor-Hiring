const express = require('express')
const app = express()
const client = require('../database/connection')

app.use(express.json({extended:true}))


var retrieve_workers=(req,res)=>{
   db1=client.db('Hiring')

   db1.collection('employee').find({job_id:req.body.job_id}).toArray(function(err,result){
      if (err) return res.status(400).send("0");

      res.status(200).send(result);
   });
}

module.exports = retrieve_workers