import express from "express";
import path, { dirname } from "path"

const __dirname = path.resolve(path.dirname(""));

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

const port = 3001

app.listen(port,() => {
    
});

app.get("/", (req, res) => {
    res.render("index.ejs", {
        pokedex
    });

});

app.get("/pokemon", (req, res) =>{
    res.send("Eu sou a página do pokemon");
}); 
//          A CIMA APENAS CONFIGURAÇÕES GERAIS

let pokedex = [
    {
        id: 1,
        nome: "Pikachu",
        tipo:"Eletric",
        imagen:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        descrição:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
        altura:"0.4 m",
        peso:"6.0 Kg",
        categoria:"Mouse",
        habilidade:"Static",
    },
    {
        id: 2,
        nome: "Bulbasaur",
        tipo:"Grass",
        imagen:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        descrição:"There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        altura:"0.7 m",
        peso:"6.9 Kg",
        categoria:"Seed",
        habilidade:"Overgrow",
    },
    {
        id: 3,
        nome: "Charizard ",
        tipo:"Fire",
        imagen:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        descrição:"It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
        altura:"1.7 m",
        peso:"90.5 Kg",
        categoria:"Flame",
        habilidade:"Blaze",
    },
]


