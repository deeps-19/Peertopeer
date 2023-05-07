const mongo =require('mongoose');
let teacher_Schema = new mongo.Schema({
    tid :{type:Number,required:true,unique:true},
    tname:{type:String,required:true},
    deptid:{type:String ,required:true}
});

let teacher= mongo.model('Teacher', teacher_Schema)
module.exports=teacher;