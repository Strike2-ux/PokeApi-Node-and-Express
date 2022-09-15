const express = require('express');
const app = express();
const port = 3000



const allPokemon = [{
    id: "1",
    name: "bulsbasaur",
    type0: "grass",
    type1: "poison",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
},{
    id:"2",
    name:"ivysaur",
    type0: "grass",
    type1: "poison",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
    
},{
    id:"3",
    name:"venasaur",
    type0:"grass",
    type1:"poison",
    url:"https://pokeapi.co/api/v2/pokemon/3/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
    
},{
    id:"4",
    name:"charmander",
    type0: "fire",
    url: "https://pokeapi.co/api/v2/pokemon/4/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
    
},{
    id:"5",
    name:"charmeleon",
    type0: "fire",
    url:"https://pokeapi.co/api/v2/pokemon/5/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
    
},{
    id:"6",
    name:"charizard",
    type0: "fire",
    type1: "flying",
    url:"https://pokeapi.co/api/v2/pokemon/6/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
},{
    id: "7",
    name: "squirtle",
    type0: "water",
    url:"https://pokeapi.co/api/v2/pokemon/7/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
},{ 
    id:"8",
    name: "wartortle",
    type0: "water",
    url: "https://pokeapi.co/api/v2/pokemon/8/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
},{
    id:"9",
    name: "blastoise",
    type0: "water",
    url: "https://pokeapi.co/api/v2/pokemon/9/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
},{
    id:"10", 
    name: "caterpie",
    type0: "bug",
    url: "https://pokeapi.co/api/v2/pokemon/10/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"
    },
{
    id:"11",
    name: "metapod",
    type0: "bug",
    url: "https://pokeapi.co/api/v2/pokemon/11/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
},{
    id:"12",
    name: "butterfree",
    type0: "bug",
    type1: "flying",
    url: "https://pokeapi.co/api/v2/pokemon/12/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
},{
    id:"13",
    name: "weedle",
    type0: "bug",
    type1: "poison",
    url: "https://pokeapi.co/api/v2/pokemon/13/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png"
},{
    id:"14",
    name:"kakuna",
    type0: "bug",
    type1:  "poison",
    url: "https://pokeapi.co/api/v2/pokemon/14/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png"

},{
    id:"15",
    name: "beedrill",
    type0:"bug",
    type1:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/15/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png"
},{
    id:"16",
    name: "pidgey",
    type0:"normal",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/16/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
},{
    id:"17",
    name: "pidgeotto",
    type0:"normal",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/17/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png"
},{
    id:"18",
    name: "pidgeot",
    type0:"normal",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/18/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png"
},{
    id:"19",
    name: "rattata",
    type0:"normal",
    url: "https://pokeapi.co/api/v2/pokemon/19/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png"
},{
    id:"20",
    name: "raticate",
    type0:"normal",
    url: "https://pokeapi.co/api/v2/pokemon/20/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png"
},{
    id:"21",
    name: "spearow",
    type0:"normal",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/21/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png"
},{
    id:"22",
    name: "fearow",
    type0:"normal",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/22/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png"
},{
    id:"23",
    name: "ekans",
    type0:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/23/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png"
},{
    id:"24",
    name: "arbok",
    type0:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/24/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png"
},{
    id:"25",
    name: "pikachu",
    type0:"electric",
    url: "https://pokeapi.co/api/v2/pokemon/25/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
},{
    id:"26",
    name: "raichu",
    type0:"electric",
    url: "https://pokeapi.co/api/v2/pokemon/26/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png"
},{
    id:"27",
    name: "sandshrew",
    type0:"ground",
    url: "https://pokeapi.co/api/v2/pokemon/27/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png"
},{
    id:"28",
    name: "sandslash",
    type0:"ground",
    url: "https://pokeapi.co/api/v2/pokemon/28/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png"
},{
    id:"29",
    name: "nidoran♀",
    type0:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/29/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png"
},{
    id:"30",
    name: "nidorina",
    type0:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/30/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png"
},{
    id:"31",
    name: "nidoqueen",
    type0:"poison",
    type1:"ground",
    url: "https://pokeapi.co/api/v2/pokemon/31/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png"
},{
    id:"32",
    name: "nidoran♂",
    type0:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/32/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png"
},{
    id:"33",
    name: "nidorino",
    type0:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/33/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png"
},{
    id:"34",
    name: "nidoking",
    type0:"poison",
    type1:"ground",
    url: "https://pokeapi.co/api/v2/pokemon/33/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png"
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
