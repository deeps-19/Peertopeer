const mongo =require('mongoose');
let department_Schema = new mongo.Schema({
    did :{type:Number,required:true,unique:true},
    dname:{type:String,required:true},
    
});

let department= mongo.model('department', department_Schema)
module.exports=department;