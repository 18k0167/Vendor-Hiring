const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const emplSchema = new Schema({
   id:{
      type:Number,
      required:true
   },
   email:{
      type:String,
      required:true
   },
   job_id:{
      type:Number,
      required:true
   }
},{timestamps:true});

const Employee = mongoose.model('Employee',emplSchema);

module.exports = Employee;