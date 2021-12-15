const express = require('express')
const app = express()
const client = require('../database/connection')


// const { db } = require('./database/User')
app.use(express.json({extended:true}))

const assigned_jobs = (req,res)=>{
    db1 = client.db('Hiring')
    
    db1.collection('bookings').aggregate([
        {$match:{'cust_id':req.body.cust_id}},
        {$project: {
            emp_id:{
              $toObjectId:"$emp_id"
            },
            status:"$status",
            time:"$time"
         }
        },
         {$lookup:
           {
             from: 'employee',
             localField: 'emp_id',
             foreignField:  '_id',
             as: 'emp'
           }
         }
        ]).toArray(function(err, result) {
        if (err) return res.status(400).send("Server Error");
        console.log("customer bookings")

        res.status(200).send(result)
      });
    
}
module.exports = assigned_jobs