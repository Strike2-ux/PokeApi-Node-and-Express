const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Entro solo a la url');   
    
})

const allPokemon = [{
    id: "1",
    nombre: "Bulsbasaur",
    tipo: "planta"
}, {
    id:"2",
    nombre:"Ivysaur",
    tipo: "planta"
    
},{
    id:"3",
    nombre:"Venasaur",
    tipo: "planta"
    
},{
    id:"4",
    nombre:"Charmander",
    tipo: "fuego"
    
},{
    id:"5",
    nombre:"Charmeleon",
    tipo: "fuego"
    

}]

app.get('/pokemon/:id/tipo/:type', (req, res) => {
    console.log(req.params)
    const pokemon = getPokemonById(req.params.id) 
    res.send(pokemon);    
})

app.get('/pokemon', (req, res) => {
    res.send(allPokemon)    
})

app.listen(port, () => {
    console.log('Example app listen in git http://localhost:${port}')

})

function getPokemonById(id) {
    return allPokemon.find(pokemon  => pokemon.id == id)
}
