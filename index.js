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
    url: "https://pokeapi.co/api/v2/pokemon/34/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png"
},{
    id:"35",
    name: "Clefairy",
    type0:"fairy",
    url: "https://pokeapi.co/api/v2/pokemon/35/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"
},{
    id:"36",
    name: "Clefable",
    type0:"fairy",
    url: "https://pokeapi.co/api/v2/pokemon/36/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png"
},{
    id:"37",
    name: "Vulpix",
    type0:"fire",
    url: "https://pokeapi.co/api/v2/pokemon/37/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png"
},{
    id:"38",
    name: "Ninetales",
    type0:"fire",
    url: "https://pokeapi.co/api/v2/pokemon/38/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"
},{
    id:"39",
    name: "Jigglypuff",
    type0:"normal",
    type1:"fairy",
    url: "https://pokeapi.co/api/v2/pokemon/39/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"
},{
    id:"40",
    name: "Clefable",
    type0:"normal",
    type1:"fairy",
    url: "https://pokeapi.co/api/v2/pokemon/40/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png"
},{
    id:"41",
    name: "Zubat",
    type0:"poison",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/41/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png"
},{
    id:"42",
    name: "Golbat",
    type0:"poison",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/42/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png"
},{
    id:"43",
    name: "Oddish",
    type0:"grass",
    type1:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/43/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png"
},{
    id:"44",
    name: "Gloom",
    type0:"grass",
    type1:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/44/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png"
},{
    id:"45",
    name: "Vileplume",
    type0:"grass",
    type1:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/45/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png"
},{
    id:"46",
    name: "Paras",
    type0:"bug",
    type1:"grass",
    url: "https://pokeapi.co/api/v2/pokemon/46/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png"
},{
    id:"47",
    name: "Parasect",
    type0:"bug",
    type1:"grass",
    url: "https://pokeapi.co/api/v2/pokemon/47/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png"
},{
    id:"48",
    name: "Venonat",
    type0:"bug",
    type1:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/48/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png"
},{
    id:"49",
    name: "Venomoth",
    type0:"bug",
    type1:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/49/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png"
},{
    id:"50",
    name: "Diglett",
    type0:"ground",
    url: "https://pokeapi.co/api/v2/pokemon/50/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png"
},{
    id:"51",
    name: "Dugtrio",
    type0:"ground",
    url: "https://pokeapi.co/api/v2/pokemon/51/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png"
},{
    id:"52",
    name: "Meowth",
    type0:"normal",
    url: "https://pokeapi.co/api/v2/pokemon/52/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png"
},{
    id:"53",
    name: "Persian",
    type0:"normal",
    url: "https://pokeapi.co/api/v2/pokemon/53/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png"
},{
    id:"54",
    name: "Psyduck",
    type0:"water",
    url: "https://pokeapi.co/api/v2/pokemon/54/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"
},{
    id:"55",
    name: "Golduck",
    type0:"water",
    url: "https://pokeapi.co/api/v2/pokemon/55/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png"
},{
    id:"56",
    name: "Mankey",
    type0:"fighting",
    url: "https://pokeapi.co/api/v2/pokemon/56/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png"
},{
    id:"57",
    name: "Primeape",
    type0:"fighting",
    url: "https://pokeapi.co/api/v2/pokemon/57/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png"
},{
    id:"58",
    name: "Growlithe",
    type0:"fire",
    url: "https://pokeapi.co/api/v2/pokemon/58/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png"
},{
    id:"59",
    name: "Arcanine",
    type0:"fire",
    url: "https://pokeapi.co/api/v2/pokemon/59/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png"
},{
    id:"60",
    name: "Poliwag",
    type0:"water",
    url: "https://pokeapi.co/api/v2/pokemon/60/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png"
},{
    id:"61",
    name: "Poliwhirl",
    type0:"water",
    url: "https://pokeapi.co/api/v2/pokemon/61/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png"
},{
    id:"62",
    name: "Poliwrath",
    type0:"water",
    type1:"fighting",
    url: "https://pokeapi.co/api/v2/pokemon/62/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png"
},{
    id:"63",
    name: "Abra",
    type0:"psychic",
    url: "https://pokeapi.co/api/v2/pokemon/63/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png"
},{
    id:"64",
    name: "Kadara",
    type0:"psychic",
    url: "https://pokeapi.co/api/v2/pokemon/64/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png"
},{
    id:"65",
    name: "Alakazam",
    type0:"psychic",
    url: "https://pokeapi.co/api/v2/pokemon/65/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png"
},{
    id:"66",
    name: "Machop",
    type0:"fighting",
    url: "https://pokeapi.co/api/v2/pokemon/66/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png"
},{
    id:"67",
    name: "Machoke",
    type0:"fighting",
    url: "https://pokeapi.co/api/v2/pokemon/67/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png"
},{
    id:"68",
    name: "Machamp",
    type0:"fighting",
    url: "https://pokeapi.co/api/v2/pokemon/68/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png"
},{
    id:"69",
    name: "Bellsprout",
    type0:"grass",
    type1:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/69/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png"
},{
    id:"70",
    name: "weepinbell",
    type0:"grass",
    type1:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/70/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png"
},{
    id:"71",
    name: "victreebel",
    type0:"grass",
    type1:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/71/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png"
},{
    id:"72",
    name: "Tentacool",
    type0:"water",
    type1:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/72/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png"
},{
    id:"73",
    name: "Tentacruel",
    type0:"water",
    type1:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/73/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png"
},{
    id:"74",
    name: "Geodude",
    type0:"rock",
    type1:"ground",
    url: "https://pokeapi.co/api/v2/pokemon/74/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png"
},{
    id:"75",
    name: "Graveler",
    type0:"rock",
    type1:"ground",
    url: "https://pokeapi.co/api/v2/pokemon/75/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png"
},{
    id:"76",
    name: "Golem",
    type0:"rock",
    type1:"ground",
    url: "https://pokeapi.co/api/v2/pokemon/76/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png"
},{
    id:"77",
    name: "Ponyta",
    type0:"fire",
    url: "https://pokeapi.co/api/v2/pokemon/77/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png"
},{
    id:"78",
    name: "Rapidash",
    type0:"fire",
    url: "https://pokeapi.co/api/v2/pokemon/78/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png"
},{
    id:"79",
    name: "Slowpoke",
    type0:"water",
    type1:"psychic",
    url: "https://pokeapi.co/api/v2/pokemon/79/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png"
},{
    id:"80",
    name: "Slowbro",
    type0:"water",
    type1:"psychic",
    url: "https://pokeapi.co/api/v2/pokemon/80/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png"
},{
    id:"81",
    name: "Magnemite",
    type0:"eletric",
    type1:"steel",
    url: "https://pokeapi.co/api/v2/pokemon/81/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png"
},{
    id:"82",
    name: "Magneton",
    type0:"eletric",
    type1:"steel",
    url: "https://pokeapi.co/api/v2/pokemon/82/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png"
},{
    id:"83",
    name: "Farfetch'd",
    type0:"normal",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/83/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png"
},{
    id:"84",
    name: "Doduo",
    type0:"normal",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/84/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png"
},{
    id:"85",
    name: "Dodrio",
    type0:"normal",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/85/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png"
},{
    id:"86",
    name: "Seel",
    type0:"water",
    url: "https://pokeapi.co/api/v2/pokemon/86/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png"
},{
    id:"87",
    name: "Dewgong",
    type0:"water",
    type1:"ice",
    url: "https://pokeapi.co/api/v2/pokemon/87/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png"
},{
    id:"88",
    name: "Grimer",
    type0:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/88/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png"
},{
    id:"89",
    name: "Muk",
    type0:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/89/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png"
},{
    id:"90",
    name: "Shellder",
    type0:"water",
    url: "https://pokeapi.co/api/v2/pokemon/90/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png"
},{
    id:"91",
    name: "Cloyster",
    type0:"water",
    type1:"ice",
    url: "https://pokeapi.co/api/v2/pokemon/91/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png"
},{
    id:"92",
    name: "Gastly",
    type0:"ghost",
    type1:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/92/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png"
},{
    id:"93",
    name: "Haunter",
    type0:"ghost",
    type1:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/93/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png"
},{
    id:"94",
    name: "Gengar",
    type0:"ghost",
    type1:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/94/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"
},{
    id:"95",
    name: "Onix",
    type0:"rock",
    type1:"ground",
    url: "https://pokeapi.co/api/v2/pokemon/95/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png"
},{
    id:"96",
    name: "Drowzee",
    type0:"psychic",
    url: "https://pokeapi.co/api/v2/pokemon/96/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png"
},{
    id:"97",
    name: "Hypno",
    type0:"psychic",
    url: "https://pokeapi.co/api/v2/pokemon/97/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png"
},{
    id:"98",
    name: "Krabby",
    type0:"water",
    url: "https://pokeapi.co/api/v2/pokemon/98/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png"
},{
    id:"99",
    name: "Kingler",
    type0:"water",
    url: "https://pokeapi.co/api/v2/pokemon/99/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png"
},{
    id:"100",
    name: "Voltorb",
    type0:"eletric",
    url: "https://pokeapi.co/api/v2/pokemon/100/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png"
},{
    id:"101",
    name: "Electrode",
    type0:"eletric",
    url: "https://pokeapi.co/api/v2/pokemon/101/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png"
},{
    id:"102",
    name: "Exeggcute",
    type0:"grass",
    type1:"psychic",
    url: "https://pokeapi.co/api/v2/pokemon/102/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png"
},{
    id:"103",
    name: "Exeggutor",
    type0:"grass",
    type1:"psychic",
    url: "https://pokeapi.co/api/v2/pokemon/103/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png"
},{
    id:"104",
    name: "Cubone",
    type0:"ground",
    url: "https://pokeapi.co/api/v2/pokemon/104/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png"
},{
    id:"105",
    name: "Marowak",
    type0:"ground",
    url: "https://pokeapi.co/api/v2/pokemon/105/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png"
},{
    id:"106",
    name: "Hitmonlee",
    type0:"fighting",
    url: "https://pokeapi.co/api/v2/pokemon/106/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png"
},{
    id:"107",
    name: "Hitmonchan",
    type0:"fighting",
    url: "https://pokeapi.co/api/v2/pokemon/107/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png"
},{
    id:"108",
    name: "Lickitung",
    type0:"normal",
    url: "https://pokeapi.co/api/v2/pokemon/108/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png"
},{
    id:"109",
    name: "Koffing",
    type0:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/109/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png"
},{
    id:"110",
    name: "Weezing",
    type0:"poison",
    url: "https://pokeapi.co/api/v2/pokemon/110/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png"
},{
    id:"111",
    name: "Rhyhorn",
    type0:"ground",
    type1:"rock",
    url: "https://pokeapi.co/api/v2/pokemon/111/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png"
},{
    id:"112",
    name: "Rhydon",
    type0:"ground",
    type1:"rock",
    url: "https://pokeapi.co/api/v2/pokemon/112/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png"
},{
    id:"113",
    name: "Chansey",
    type0:"normal",
    url: "https://pokeapi.co/api/v2/pokemon/113/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png"
},{
    id:"114",
    name: "Tangela",
    type0:"grass",
    url: "https://pokeapi.co/api/v2/pokemon/114/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png"
},{
    id:"115",
    name: "Kangaskhan",
    type0:"normal",
    url: "https://pokeapi.co/api/v2/pokemon/115/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png"
},{
    id:"116",
    name: "Horsea",
    type0:"water",
    url: "https://pokeapi.co/api/v2/pokemon/116/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png"
},{
    id:"117",
    name: "Seadra",
    type0:"water",
    url: "https://pokeapi.co/api/v2/pokemon/117/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png"
},{
    id:"118",
    name: "Goldeen",
    type0:"water",
    url: "https://pokeapi.co/api/v2/pokemon/118/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png"
},{
    id:"119",
    name: "Seaking",
    type0:"water",
    url: "https://pokeapi.co/api/v2/pokemon/119/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png"
},{
    id:"120",
    name: "Staryu",
    type0:"water",
    url: "https://pokeapi.co/api/v2/pokemon/120/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png"
},{
    id:"121",
    name: "Starmie",
    type0:"water",
    type1:"psychic",
    url: "https://pokeapi.co/api/v2/pokemon/121/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png"
},{
    id:"122",
    name: "Mr. Mime",
    type0:"psychic",
    type1:"fairy",
    url: "https://pokeapi.co/api/v2/pokemon/122/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png"
},{
    id:"123",
    name: "Scyther",
    type0:"bug",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/123/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png"
},{
    id:"124",
    name: "Jynx",
    type0:"ice",
    type1:"psychic",
    url: "https://pokeapi.co/api/v2/pokemon/124/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png"
},{
    id:"125",
    name: "Electabuzz",
    type0:"eletric",
    url: "https://pokeapi.co/api/v2/pokemon/125/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png"
},{
    id:"126",
    name: "Magmar",
    type0:"fire",
    url: "https://pokeapi.co/api/v2/pokemon/126/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png"
},{
    id:"127",
    name: "Pinsir",
    type0:"bug",
    url: "https://pokeapi.co/api/v2/pokemon/127/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png"
},{
    id:"128",
    name: "Tauros",
    type0:"normal",
    url: "https://pokeapi.co/api/v2/pokemon/128/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png"
},{
    id:"129",
    name: "Magikarp",
    type0:"water",
    url: "https://pokeapi.co/api/v2/pokemon/129/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png"
},{
    id:"130",
    name: "Gyarados",
    type0:"water",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/130/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png"
},{
    id:"131",
    name: "Lapras",
    type0:"water",
    type1:"ice",
    url: "https://pokeapi.co/api/v2/pokemon/131/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png"
},{
    id:"132",
    name: "Ditto",
    type0:"normal",
    url: "https://pokeapi.co/api/v2/pokemon/132/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png"
},{
    id:"133",
    name: "Eevee",
    type0:"normal",
    url: "https://pokeapi.co/api/v2/pokemon/133/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"
},{
    id:"134",
    name: "Vaporeon",
    type0:"water",
    url: "https://pokeapi.co/api/v2/pokemon/134/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png"
},{
    id:"135",
    name: "Jolteon",
    type0:"eletric",
    url: "https://pokeapi.co/api/v2/pokemon/135/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png"
},{
    id:"136",
    name: "Flareon",
    type0:"fire",
    url: "https://pokeapi.co/api/v2/pokemon/136/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png"
},{
    id:"137",
    name: "Porygon",
    type0:"normal",
    url: "https://pokeapi.co/api/v2/pokemon/137/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png"
},{
    id:"138",
    name: "Omanyte",
    type0:"rock",
    type1:"water",
    url: "https://pokeapi.co/api/v2/pokemon/138/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png"
},{
    id:"139",
    name: "Omastar",
    type0:"rock",
    type1:"water",
    url: "https://pokeapi.co/api/v2/pokemon/139/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png"
},{
    id:"140",
    name: "Kabuto",
    type0:"rock",
    type1:"water",
    url: "https://pokeapi.co/api/v2/pokemon/140/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png"
},{
    id:"141",
    name: "Kabutops",
    type0:"rock",
    type1:"water",
    url: "https://pokeapi.co/api/v2/pokemon/141/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png"
},{
    id:"142",
    name: "Aerodactyl",
    type0:"rock",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/142/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png"
},{
    id:"143",
    name: "Snorlax",
    type0:"normal",
    url: "https://pokeapi.co/api/v2/pokemon/143/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
},{
    id:"144",
    name: "Articuno",
    type0:"ice",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/144/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png"
},{
    id:"145",
    name: "Zapdos",
    type0:"eletric",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/145/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png"
},{
    id:"146",
    name: "Moltres",
    type0:"fire",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/146/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png"
},{
    id:"147",
    name: "Dratini",
    type0:"dragon",
    url: "https://pokeapi.co/api/v2/pokemon/147/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png"
},{
    id:"148",
    name: "Dragonair",
    type0:"dragon",
    url: "https://pokeapi.co/api/v2/pokemon/148/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png"
},{
    id:"149",
    name: "Dragonite",
    type0:"dragon",
    type1:"flying",
    url: "https://pokeapi.co/api/v2/pokemon/149/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"
},{
    id:"150",
    name: "Mewtwo",
    type0:"psychic",
    url: "https://pokeapi.co/api/v2/pokemon/150/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
},{
    id:"151",
    name: "Mew",
    type0:"psychic",
    url: "https://pokeapi.co/api/v2/pokemon/151/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"
},{
    id:"422",
    name: "shellos",
    type0:"water",
    url: "https://pokeapi.co/api/v2/pokemon/422/",
    image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/422.png"
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
