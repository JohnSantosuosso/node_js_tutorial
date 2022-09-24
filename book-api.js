
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

//where we will keep books
let books = [];

app.use(cors());

//Configuring body parser middleware
//here we configure the app to use bodyParser as middle-ware and pass it the app.use
app.use(bodyParser.urlencoded({ extended: false }));//method. The bodyParser.urlencoded() method is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(bodyParser.urlencoded());
app.use(bodyParser.json()); //this is the same as above but for json

app.post('/book', (req, res) => {
  //We will save the book information in the books array
  books.push(req.body);
  res.send('Book is added to the database');
});

//console.log that your server is up and running
app.listen(port, () => console.log(`Book app listening on port ${port}!`)