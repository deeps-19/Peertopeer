let express = require('express');
let app=express();
let mongo=require('mongoose');
let teacher_Schema=require ('./TeacherSchema.js');
app.use(express.json());

app.listen(3000,()=>{console.log("running11")})

app.get('/',(request , response)=>{
    response.write("teacher");
    response.end();
})

mongo.connect('mongodb://127.0.0.1:27017/DEPT',{
    useNewUrlParser:true,
        useUnifiedTopology:true

})
.then(()=>{console.log("connected")})
.catch((error)=>{console.log(error);})

app.post('/insertteacher' , (request,response)=>{
    try{
        let new_tea= new teacher_Schema(request.body);
        new_tea.save();
        response.status(200).json(new_tea);

    }
    catch(error)
    {
        response.status(400).send(400);
    }
})

app.get('/viewteacher',async (request,response)=>{
    try{
        //fetch data from database
        let data= await teacher_Schema.find();

        response.json(data);
    }
    catch(error)
    {
        response.sendStatus(400).send(error);
    }
})




app.patch('/update/:id',async (request,response)=>{
    try{
        let data= await teacher_Schema.findByIdAndUpdate(request.params.id, 
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
        let teacher = await teacher_Schema.findByIdAndDelete(req.params.id);
        if(teacher == null)
        {
            res.send ("Not fond & deleted")
        }
        else
        {
            res.json(teacher)
        }
    }
    catch(error){
        res.send(error)
    }
})