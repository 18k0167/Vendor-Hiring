const express = require('express')
const app = express()
const client = require('../database/connection')


// const { db } = require('./database/User')
app.use(express.json({extended:true}))

const assigned_jobs = (req,res)=>{
    db1 = client.db('Hiring')
    
    db1.collection('bookings').aggregate([
        {$match:{'emp_id':req.body.emp_id}},
        {$project: {
            cust_id:{
              $toObjectId:"$cust_id"
            },
            status:"$status",
            time:"$time"
         }
        },
         {$lookup:
           {
             from: 'customer',
             localField: 'cust_id',
             foreignField:  '_id',
             as: 'cust'
           }
         }
        ]).toArray(function(err, result) {
        if (err) return res.status(400).send("Server Error");
        console.log(JSON.stringify(result));
        res.status(200).send(result)
      });
    
}
module.exports = assigned_jobs