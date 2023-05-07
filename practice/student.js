let express = require('express');
let app=express();
let mongo=require('mongoose');
let student_Schema=require ('./Studentschema.js');
app.use(express.json());

app.listen(3000,()=>{console.log("running11")})

app.get('/',(request , response)=>{
    response.write("Student");
    response.end();
})

mongo.connect('mongodb://127.0.0.1:27017/DEPT',{
    useNewUrlParser:true,
        useUnifiedTopology:true

})
.then(()=>{console.log("connected")})
.catch((error)=>{console.log(error);})

app.post('/insertstudent' , (request,response)=>{
    try{
        let new_std= new student_Schema(request.body);
        new_std.save();
        response.status(200).json(new_std);

    }
    catch(error)
    {
        response.status(400).send(400);
    }
})

app.get('/viewstudents',async (request,response)=>{
    try{
        //fetch data from database
        let data= await student_Schema.find();

        response.json(data);
    }
    catch(error)
    {
        response.sendStatus(400).send(error);
    }
})

// app.get('/students/:id', async (request,response)=>{
//     try{
//         let data = await student_Schema.findById(request.params.id); 
//         if(data!=null)
//             {
//                 response.json(data);
//             }
//             else
//             {
//                 response.status(404).send("manager not found")

//             }
//     }
//     catch(error)
//     {
//         response.send(error)
//     }
// })



app.patch('/update/:id',async (request,response)=>{
    try{
        let data= await student_Schema.findByIdAndUpdate(request.params.id, 
            request.body);
        if(data != null)
        {
            response.json(data);
        }
        else
        {
            response.send("manger not found");
        }
    }   
    catch(error){
        response.send({message:error.massage})
    } 
})

app.delete("/delete/:id", async(req,res)=>{
    try{
        let student = await student_Schema.findByIdAndDelete(req.params.id);
        if(student== null)
        {
            res.send ("Not fond & deleted")
        }
        else
        {
            res.json(student)
        }
    }
    catch(error){
        res.send(error)
    }
})