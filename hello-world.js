//import Express framework
const express = require('express');

//instantiate express app
const app = express();

//define port
const port = 3000;

//define route
app.get('/', (req,res) => {
  res.send('Hello World, from express')
});

//start clients
app.listen(port, () => console.log(`Hello world app listening on port; ${port}!`));
