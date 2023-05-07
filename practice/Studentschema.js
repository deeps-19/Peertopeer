const mongo =require('mongoose');
let student_Schema = new mongo.Schema({
    sid :{type:Number,required:true,unique:true},
    sname:{type:String,required:true},
    dob:{type:String ,required:true},
    marks:{type:Number,required:true}
});

let student= mongo.model('Stuent', student_Schema)
module.exports=student;