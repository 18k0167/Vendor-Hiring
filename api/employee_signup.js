const express = require('express')
const app = express()
const client = require('../database/connection')
// const User = require('./database/User')
const router = express.Router()
const bodyParser = require('body-parser')
const { Db } = require('mongodb')
// const { db } = require('./database/User')
app.use(express.json({extended:true}))

const emp_register = (req,res)=>{
   var myobj = {emp_name:req.body.name,emp_email:req.body.email,emp_password:req.body.password}
    db1 = client.db('Hiring').collection('employee');

    db1.findOne({
      emp_email:req.body.email,
    },function(err,user){
      if (err) throw err;
      if(user) return res.status(400).send("Email address already exists");
    
    db1.insertOne(myobj, function(err, user) {
        if (err) return res.status(500).send("There was problem registering");
        res.status(200).send({auth:true,data:user});
        // db.close();
      });
    });
      
    
}
module.exports = emp_register