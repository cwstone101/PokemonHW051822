const express = require('express');

const app = express();

const port = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const pokeData = require('./models/pokemon')

let pokemon = require('./models/pokemon.js');

app.get('/pokemon', (req, res) => {
    res.render("index", {pokemon: pokeData})
});




app.get('/', (req, res) =>{
    res.send('Weclome to the Pokemon App!');
})

// app.get('/pokemon/:id', (req, res) => {
// 	res.render('show.jsx', {
// 		pokemon: pokeData[req.params.id]
// 	});
// });

app.get('/pokemon/:character', (req, res) => {
    res.render("Show", {pokemon: pokeData[req.params.character]});
});





console.log(pokemon);


app.listen(port, ()=>{
    console.log('listening');

});
