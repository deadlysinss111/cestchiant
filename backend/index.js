const express = require("express");
const dbo = require("./db/db");
const app = express();
const port = 4444;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

dbo.connectToServer();

// Ce code va en haut de votre fichier index.js, dans vos requires
var cors = require('cors');
const { ObjectID, ObjectId } = require("bson");

//celui-ci après la déclaration de la variable app
app.use(cors())


/*
suite du code ici
*/
/* index.js code before... */
app.get("/pokepo/print", function (req, res) {
    const dbConnect = dbo.getDb();
    dbConnect
      .collection("pokepo")
      .find({})
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching pokemons!");
        } else {
          res.json(result);
        }
      });
  });

  
app.use(bodyParser.urlencoded({ extended: true }));


//cherche un pokepo selon les filtres indiqués
app.get('/pokepo/filter/:search', (req, res) => {
  const dbConnect = dbo.getDb();
  dbConnect.collection("pokepo").find({parti:{$in:[req.params.search]}}).toArray(function (err, result) {
    if (err) {
      res.status(400).send(err.message);
    }
    res.json(result);
  });
});

//ajouter un pokemon
app.post('/pokepo/insert', jsonParser, (req, res) => {
  const dbConnect = dbo.getDb();
  const body = req.body;
  console.log('Got body:', body);
  dbConnect.collection("pokepo").insertOne(body)
  res.json(body);
});

//supprimer un pokemon
app.post('/pokepo/delete', jsonParser, (req, res) => {
  const dbConnect = dbo.getDb();
  const body = req.body;
  console.log('Got body:', body);
  dbConnect.collection("pokepo").deleteOne(body)
  res.json(body);
});


//update le nom d'un pokemon
app.post('/pokepo/updateName', jsonParser, (req, res) => {
  const dbConnect = dbo.getDb();
  const body = req.body;
  console.log('Got body:', body);
  dbConnect.collection("pokepo").updateOne({name:body.name}, {$set:{name:body.to}})
  res.json(body);
});

//update le parti d'un pokemon
app.post('/pokepo/updateParti', jsonParser, (req, res) => {
  const dbConnect = dbo.getDb();
  const body = req.body;
  console.log('Got body:', body);
  dbConnect.collection("pokepo").updateOne({name:body.name}, {$set:{parti:body.to}})
  res.json(body);
});

//update la chance de capture d'un pokemon
app.post('/pokepo/updateChance', jsonParser, (req, res) => {
  const dbConnect = dbo.getDb();
  const body = req.body;
  console.log('Got body:', body);
  dbConnect.collection("pokepo").updateOne({name:body.name}, {$set:{chance:body.to}})
  res.json(body);
});

//update l'image d'un pokemon
app.post('/pokepo/updateImage', jsonParser, (req, res) => {
  const dbConnect = dbo.getDb();
  const body = req.body;
  console.log('Got body:', body);
  dbConnect.collection("pokepo").updateOne({name:body.name}, {$set:{image:body.to}})
  res.json(body);
});

//DANS LE POKEDEX

//ajoute un pokemon au pokedex
{/*app.post('/polidex/insert', jsonParser, (req, res) => {
  const dbConnect = dbo.getDb();
  const body = req.body;
  console.log('Got body:', body)
  toImport = () => dbConnect.collection("pokepo").find({name:"Emmanuel Macron"}).toArray(function(err, result){
    if (err){console.log("niksamer")}
    
  }).then( console.log(toImport(), "rr"))
  //const toImport = dbConnect.collection("pokepo").findOne({name:body.name})//.then(
    //() => console.log(toImport), console.log("ggg")//(toImport)=>dbConnect.collection("polidex").insertOne(toImport)
  //);
  res.json(toImport());
});*/}




//ajouter un pokemon
app.post('/polidex/insert', jsonParser, (req, res) => {
  const dbConnect = dbo.getDb();
  const body = req.body;
  console.log('Got body:', body);
  dbConnect.collection("polidex").insertOne(body)
  res.json(body);
});


//afficher le polidex
app.get("/polidex/print", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("polidex")
    .find({}) 
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching pokemons!");
      } else {
        res.json(result);
      }
    });
});


//supprimer un pokemon du pokedex
app.post('/polidex/delete', jsonParser, (req, res) => {
  const dbConnect = dbo.getDb();
  const body = req.body;
  console.log('Got body:', body);
  dbConnect.collection("polidex").deleteOne(body)
  res.json(body);
});

//cherche un pokepo dans le polidex selon les filtres indiqués
app.get('/polidex/filter/:search', (req, res) => {
  const dbConnect = dbo.getDb();
  dbConnect.collection("polidex").find({parti:{$in:[req.params.search]}}).toArray(function (err, result) {
    if (err) {
      res.status(400).send(err.message);
    }
    res.json(result);
  });
});


app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});