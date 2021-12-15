var express = require('express');
const client = require('./database/connection')
const emp_signup = require('./api/employee_signup')
const cust_signup=require('./api/user_signup')
const login = require('./api/login')
const update_employee=require('./api/update')
const update_status=require('./api/update_status')
const retrive_workers = require('./api/retrieve_workers')
const fetch_jobs = require('./api/job_fetch')
const fetch_bookings = require('./api/fetch_bookings')
const fetch_bookings_cust = require('./api/fetch_bookings_cust')
const book_worker = require('./api/book_worker')
const update_review=require('./api/update_review')
const bodyParser = require('body-parser')
var app = express();
const router = express.Router()

app.use(express.json({extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);




router.get('/', function (req, res) {
   var db1=client.db("hirestream");
   var obj={name:"vikash",id:101};

   db1.collection("employee").insertOne(obj,function(err,res){
      if (err)  throw err;
      console.log("doc inserted");
   });
   res.send("added")
})

router.post('/add_employee',emp_signup);
router.post('/add_customer',cust_signup);
router.post('/login',login);
router.post('/update_employee',update_employee);
router.post('/retrieve_workers',retrive_workers);
router.get('/fetch_jobs',fetch_jobs);
router.post('/book_worker',book_worker);
router.post('/fetch_bookings',fetch_bookings);
router.post('/fetch_bookings_cust',fetch_bookings_cust);
router.post('/update_status',update_status)
router.post('/update_review',update_review)

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})