const express = require('express')
const app = express()
const client = require('../database/connection')
app.use(express.json({extended:true}))

const book_worker=(req,res)=>{
   var myobj={
      job_id:req.body.job_id,
      cust_id:req.body.cust_id,
      emp_id:req.body.emp_id,
      status:0,
      time:req.body.time
   }
   db1 = client.db('Hiring').collection('bookings');

   db1.insertOne(myobj, function(err, user) {
      if (err) return res.status(500).send("Booking can't be done server issue");
      res.status(200).send({auth:true,data:user});
      // db.close();
    });
  

}

module.exports=book_worker