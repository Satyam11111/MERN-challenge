const express=require('express');
const app=express();

const PORT=process.env.PORT || 3000;

data={
    "name":"Satyam",
    "age":20
}

app.get('/', (req, res)=>{ 
    res.status(200); 
    res.send(data); 
}); 

app.get('/hello', (req, res)=>{ 
    res.set('Content-Type', 'text/html'); 
    res.status(200)
    res.send("<h1>Hello GFG Learner!</h1>"); 
}); 
// post method
app.use(express.json()); 
app.post('/', (req, res)=>{ 
    const {name} = req.body; 
      
    res.send(`Welcome ${name}`); 
}) 

app.listen(PORT,(error)=>{
    if(!error){
        console.log("Server is running on port 3000");
    }else{
        console.log("Error in running server",error);
    }

});