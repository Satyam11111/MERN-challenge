# REST API - 
## Representational State Transfer

* it is a server-client based architecture
* always respect all HTTP methods


1. **GET**: Retrieves data from the server. It should not modify any resources on the server; it's used for safe and idempotent operations.

2. **POST**: Submits data to the server to create a new resource. It's often used for creating new records or submitting form data.

3. **PUT**: Updates an existing resource on the server. It's used to update or replace the state of a resource at a specific URI. If the resource does not exist, PUT can create it.

4. **DELETE**: Removes a resource from the server. It's used to delete a specified resource.

5. **PATCH**: Applies partial(update)modifications to a resource. It's used to apply partial modifications to a resource. Unlike PUT, which replaces the entire resource, PATCH only applies the changes specified in the request.

6. **HEAD**: Retrieves metadata from the server. It's similar to GET but only retrieves the headers of the response, without the body. It's often used to check the status of a resource without transferring the entire content.

7. **OPTIONS**: Retrieves the HTTP methods that the server supports for a specified URL. It's used to determine the communication options available for a given resource.

8. **TRACE**: Echoes back the received request. It's used for diagnostic purposes to see how the request changes as it passes through intermediate servers.

9. **CONNECT**: Establishes a tunnel to the server identified by the target resource. It's primarily used to set up a network connection to a web server through a proxy.



# all operations of REST 

```sh
const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// Middleware to parse incoming request bodies
app.use(bodyParser.json());

// Route to get all users
app.get('/users', (req, res) => {
    res.send(users);
});

// Route to get a user by first_name
app.get('/users/:first_name', (req, res) => {
    const firstName = req.params.first_name;
    const user = users.find(user => user.first_name === firstName);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Route to create a new user
app.post('/users', (req, res) => {
    const user = req.body;
    const newUser = { ...user, id: users.length + 1 };
    users.push(newUser);
    console.log(newUser);
    res.status(201).json(newUser);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
// Route to update a user by id
app.patch('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    const index = users.findIndex(user => user.id === parseInt(userId));
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser };
        res.json(users[index]);
    } else {
        res.status(404).send('User not found');
    }
});

// Route to delete a user by id
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    const index = users.findIndex(user => user.id === parseInt(userId));
    if (index !== -1) {
        const deletedUser = users.splice(index, 1);
        res.json(deletedUser[0]);
    } else {
        res.status(404).send('User not found');
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
```
