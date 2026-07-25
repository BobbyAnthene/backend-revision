const express = require('express');
const app = express();
const PORT = 8383;
// console.log("This is an Extra Line of Code");
let Data = ["James"]

//Middleware
app.use(express.json());

//Type 1: endpoint
//Website endpoints: These Endpoints are Typically for sending back HTML
//and they only work when a user enters the website

app.get('/', (req, res) => {
res.send(`
            <body 
            style="Background:pink;
            color:Blue">
            <h1>Data:</h1>
            <p>${JSON.stringify(Data)}</p>
            </body>
            `)
})

app.get('/dashboard', (req, res) => {
    //this is a Dashboard endpoint
    res.send('<h1>Dashboard</h1>')
})

//type 2: endpoints
//api endpoints: 

//CRUD-METHOD, Create-Post, Read-Get, Update-Put, Delete-Delete

app.get('/api/data', (req, res) => {
console.log('This one sends back Data')
res.send(Data)
})

app.post('/api/data', (req, res) => {
    const newEntry = req.body;
    console.log(newEntry);
    Data.push(newEntry.name)
    res.sendStatus(201)   
})

app.delete('/api/data', (req,res) => {
    Data.pop()
    console.log('The user was deleted')
    res.sendStatus(203)
})

app.put('/api/data/:index', (req,res) => {
    const index = req.params.index;
    const newUpdate = req.body;
    Data[index] = newUpdate.name 
    res.sendStatus(204)
    console.log('This info was updated')
})

app.listen(PORT, () => console.log(`Server is Running on port: ${PORT}`));