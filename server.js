/*



// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express"),
      app = express()
const bodyparser = require('body-parser')


// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.use(express.json())

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://'+process.env.DBPASSWORD+ ':'cluster0.yzslf4z.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
let collection = null
client.connect(err => {
  collection = client.db("datatest").collection("test");
});



app.post('/add', bodyparser.json(), function(req, res){
  console.log('body:', req.body)
  collection.insertOne(req.body)
    .then (dbresponse => {
    console.log(dbresponse)
    res.json(dbresponse.ops[0])
  })
})

app.post('/delete', bodyparser.json(), function(req, res){
  console.log('delete body', req.body)
  collection
    .deleteOne({ _id:mongodb.ObjectId( req.body.id ) })
    .then( result => res.json( result ) )
})


// full code above 
*/

const express = require( "express");
const app = express();
const bodyparser = require('body-parser')

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use( express.static('public') );
//app.use( express.json() )

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});


const mongodb = require( 'mongodb' )
const MongoClient = mongodb.MongoClient;
const password = process.env.pass

//${process.env.DBPASSWORD}
//'+password+'
const uri = 'mongodb+srv://khatera:'+password+'@cluster0.e648bw5.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let collection = null
client.connect(err => {
  collection = client.db("datatest").collection("test")
  
});
  

app.post( '/add',bodyparser.json(), function(req,res) {
  console.log('body:', req.body)
  collection.insertOne(req.body)
    .then(dbresponse => {
    console.log(dbresponse)
    res.json(dbresponse.ops[0])
  })
})

app.post('/delete', bodyparser.json(), function (req,res) {
  console.log('delete body:', req.body)
  collection
    .deleteOne({_id:mongodb.ObjectID( req.body.id ) })
    .then( result => res.json( result ))
})