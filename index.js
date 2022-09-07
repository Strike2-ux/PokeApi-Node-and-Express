const express = require('express');
const app = express();
const port = 3000



const allPokemon = [{
    id: "1",
    name: "bulsbasaur",
    type: "plant",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
},{
    id:"2",
    name:"ivysaur",
    type: "plant",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
    
},{
    id:"3",
    name:"venasaur",
    type: "plant",
    url:"https://pokeapi.co/api/v2/pokemon/3/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
    
},{
    id:"4",
    name:"charmander",
    type: "fire",
    url: "https://pokeapi.co/api/v2/pokemon/4/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
    
},{
    id:"5",
    name:"charmeleon",
    type: "fire",
    url:"https://pokeapi.co/api/v2/pokemon/5/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
    
},{
    id:"6",
    name:"charizard",
    type: "fire",
    url:"https://pokeapi.co/api/v2/pokemon/6/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
},{
    id: "7",
    name: "squirtle",
    type: "water",
    url:"https://pokeapi.co/api/v2/pokemon/7/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
},{ 
    id:"8",
    name: "wartortle",
    type: "water",
    url: "https://pokeapi.co/api/v2/pokemon/8/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
},{
    id:"9",
    name: "blastoise",
    type: "water",
    url: "https://pokeapi.co/api/v2/pokemon/9/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
},{
    id:"10", 
    name: "caterpie",
    type: "bug",
    url: "https://pokeapi.co/api/v2/pokemon/10/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"
    },
{
    id:"11",
    name: "metapod",
    type: "bug",
    url: "https://pokeapi.co/api/v2/pokemon/11/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
},{
    id:"12",
    name: "butterfree",
    type: "bug",
    url: "https://pokeapi.co/api/v2/pokemon/12/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
},{
    id:"13",
    name: "weedle",
    type: "bug",
    url: "https://pokeapi.co/api/v2/pokemon/13/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png"
},{
    id:"14",
    name:"kakuna",
    type: "bug",
    url: "https://pokeapi.co/api/v2/pokemon/14/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png"

},{
    id:"15",
    name: "beedrill",
    type:"bug",
    url: "https://pokeapi.co/api/v2/pokemon/15/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png"
},{
    id:"16",
    name: "pidgey",
    type:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/16/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
},{
    id:"17",
    name: "pidgeotto",
    type:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/17/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png"
},{
    id:"18",
    name: "pidgeot",
    type:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/18/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png"
},{
    id:"19",
    name: "rattata",
    type:"normal",
    url: "https://pokeapi.co/api/v2/pokemon/19/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png"
},{
    id:"20",
    name: "raticate",
    type:"normal",
    url: "https://pokeapi.co/api/v2/pokemon/20/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png"
},{
    id:"21",
    name: "spearow",
    type:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/21/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png"
}]


app.get('/pokemon/:id/type/', (req, res) => {
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

app.get('/', (req, res) => {
    res.send(allPokemon); 
    
})
