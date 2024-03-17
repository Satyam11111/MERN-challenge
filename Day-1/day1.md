# Day 1 - MERN

### Set up a development environment with Node.js, MongoDB, and React

### Setting Up a Basic Express Server

In this tutorial, I've gained insights into setting up a basic Express server. The process involves several steps:

1. **Importing Express**: Begin by importing the Express framework into your project. This can be done using the `require()` function or the `import` statement, depending on your project setup.

2. **Creating the App Object**: Once Express is imported, create an instance of the Express application by invoking the `express()` function. This creates the app object which will be used to define routes and configure the server.

3. **Listening for Requests**: To start the server, call the `app.listen()` method and specify the port on which the server should listen for incoming requests. This method takes in the port number as an argument.

4. **Handling POST Requests**: To handle incoming POST requests, use the `express.json()` middleware. This middleware parses incoming requests with JSON payloads and makes the parsed data available on the `req.body` property of the request object.

5. **Defining Routes**: Define routes using the `app.get()`, `app.post()`, `app.put()`, `app.delete()`, etc., methods. These methods take in a route path and a callback function which is executed when the specified route is accessed by a client.

6. **Sending Responses**: Inside the callback functions for the routes, use the `res.send()` method to send a response back to the client. This method can send various types of responses including HTML, JSON, text, etc.

7. **Error Handling**: Implement error handling middleware using `app.use()` to handle errors that occur during the execution of route handlers or middleware functions.

8. **Middleware**: Utilize middleware functions to perform tasks such as logging, authentication, data validation, etc., before passing control to the route handlers.

By following these steps, you can create a basic Express server that can handle incoming requests, process data, and send responses accordingly. Express offers a robust framework for building web applications and APIs with Node.js.


```sh
const express=require('express');
const app=express();

const PORT=process.env.PORT || 3000;

app.get('/', (req, res)=>{ 
    res.status(200); 
    res.send("Welcome to root URL of Server"); 
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
```

### Create a React application
1.npx create-react-app first
cd first
npm run start

### Connect the React frontend to the Express backend
```sh
# backend
data={
    "name":"Satyam",
    "age":20
}

app.get('/', (req, res)=>{ 
    res.status(200); 
    res.send(data); 
}); 
```

```sh
#frontend
import {useEffect,  useState } from 'react';
import './App.css';

function App() {
  const [data, setdata] = useState("");
  function getUsers(){
    fetch("http://localhost:3001/")
    .then((res)=>res.json())
    .then((data)=>setdata(data))
  }

  useEffect(() => {
    getUsers();
  }, [])
  
  return (
    <div className="App">
      <h1>API Data</h1>
      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
    </div>
  );
}

export default App;
```