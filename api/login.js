const express = require('express')
const app = express()
const client = require('../database/connection')
//const bcrypt = require('bcrypt')
// const User = require('./database/User')
const router = express.Router()
const bodyParser = require('body-parser')
const { Db, ObjectID } = require('mongodb')
const { runInNewContext } = require('vm')
// const { db } = require('./database/User')
app.use(express.json({extended:true}))
var flag
const login = (req,res)=>{
  console.log(req.body.email);
    db1 = client.db('Hiring')
    var type=req.body.usertype;

    if(type==2){
      var man = db1.collection('employee').find({emp_email:req.body.email}).toArray((err,result)=>{
        if(err) return res.status(400).send("Server Error")
        if(result.length>0){
          if(result[0].emp_password==req.body.password){
            res.status(200).send({auth:true,user:"employee",data:result[0]})
        }else
        res.status(400).send('Wrong Password')
        }
        else
        res.status(400 ).send('Not Registered')
      })
    }
    else{
      db1.collection('customer').find({cust_email:req.body.email}).toArray((err,result)=>{
        if(err) return res.status(400).send("Server Error")
        if(result.length>0){
          if(result[0].cust_password==req.body.password){
            res.status(200).send({auth:true,user:"customer",data:result[0]})
        }else
        res.status(400).send('Wrong Password')
        }
        else
        res.status(400 ).send('Not Registered')
      })
    }
    
    

    

}
module.exports = login