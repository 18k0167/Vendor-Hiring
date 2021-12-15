

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://zulfi:DC4vKuej3ktjPcNV@cluster0.cctkl.mongodb.net/Hiring?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true },{ connectTimeoutMS: 30000 }, { keepAlive: 1});
client.connect(err => {
  const collection = client.db("hirestream").collection("employee");



  // perform actions on the collection object
  console.log("connected to db")
  
});

module.exports = client



