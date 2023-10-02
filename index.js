const express = require('express');
const app = express();
const port = 3000

const allPokemon=require('./pokemon.js');

function getPokemonById(id) {
    return allPokemon.find(pokemon  => pokemon.id === id)
}

app.get('/pokemon/:id/type/', (req, res) => {
    console.log(req.params)
    const pokemon = getPokemonById(req.params.id) 
    res.send(pokemon);    
})

app.get('/pokemon', (req, res) => {
    res.send(allPokemon)    
})
 
app.listen(port, () => {
    console.log(`Example app listen in git http://localhost:${port}`)

})

app.get('/', (req, res) => {
    res.send(allPokemon);    
})
