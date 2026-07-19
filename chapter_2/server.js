const express = require('express');
const app = express();
const PORT = 8383;
// console.log("This is an Extra Line of Code");

app.get('/', (req, res) => {
    //this is an endpoint
    console.log('I hit an endpoint')
    res.sendStatus(201)
})

app.get('/dashboard', (req, res) => {
    //this is a Dashboard endpoint
    console.log('Now i hit the /dashboard endpoint')
    res.send('Hi from Server to the Dashboard')
})

app.listen(PORT, () => console.log(`Server is Running on port: ${PORT}`));