import express from "express";
import path, { dirname } from "path"

const __dirname = path.resolve(path.dirname(""));

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const port = 3001

app.listen(port,() => {
    
});

app.get("/", (req, res) => {
    res.render("index.ejs", {
        pokedex
    });

});

app.get("/detalhes/:id", (req, res) =>{
    let pokemon = [];
    pokedex.filter((elemento) =>{
        if(elemento.id == req.params.id){
            pokemon.push(elemento);
        };
    });
    res.render("detalhes.ejs", {
        pokemon
    });
}); 

app.get("/cadastro", (req, res) =>{
    res.render("cadastro.ejs");
}); 

app.post("/cadastro", (req, res) =>{
    let idAuto = pokedex[pokedex.length - 1].id + 1;

    const {nome, tipo, imagem, descricao, altura, peso, categoria, habilidade} = req.body;
    pokedex.push({id: idAuto, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade});
    res.redirect("/");
    

});

//          ACIMA APENAS CONFIGURAÇÕES GERAIS

let pokedex = [
    {
        id: 1,
        nome: "Pikachu",
        tipo:"Eletric",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        descricao:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
        altura:"0.4 m",
        peso:"6.0 Kg",
        categoria:"Mouse",
        habilidade:"Static",
    },
    {
        id: 2,
        nome: "Bulbasaur",
        tipo:"Grass",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        descricao:"There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        altura:"0.7 m",
        peso:"6.9 Kg",
        categoria:"Seed",
        habilidade:"Overgrow",
    },
    {
        id: 3,
        nome: "Charizard",
        tipo:"Fire",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        descricao:"It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
        altura:"1.7 m",
        peso:"90.5 Kg",
        categoria:"Flame",
        habilidade:"Blaze",
    },
    {
        id: 4,
        nome: "Squirtle",
        tipo:"Water",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        descricao:"When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        altura:"0.5 m",
        peso:"9.0 Kg",
        categoria:"Tiny Turtle",
        habilidade:"Torrent",
    },
    {
        id: 5,
        nome: "Pidgey ",
        tipo:"Flying",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
        descricao:"Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
        altura:"0.3 m",
        peso:"1.8 Kg",
        categoria:"Tiny Bird",
        habilidade:"Keen Eye",
    },
    {
        id: 6,
        nome: "Mewtwo ",
        tipo:"Psychic",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
        descricao:"Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different.",
        altura:"2.0 m",
        peso:"122.0 Kg",
        categoria:"CategoryGenetic",
        habilidade:"Pressure",
    },

];


