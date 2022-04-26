import express from "express";
import path, { dirname } from "path"
import dotenv from 'dotenv'

const __dirname = path.resolve(path.dirname(""));

const app = express();
dotenv.config();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const port = 3005 || "projeto-2-pokedex.vercel.app";

app.listen(port,() => {
    
});

app.get("/", (req, res) => {
    res.status(200).render("index.ejs", {
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
    res.status(200).render("detalhes.ejs", {
        pokemon
    });
}); 

app.get("/cadastro", (req, res) =>{
    res.status(200).render("cadastro.ejs");
}); 

app.post("/cadastro", (req, res) =>{
    let idAuto = pokedex[pokedex.length - 1].id + 1;

    const {nome, tipo, imagem, descricao, altura, peso, categoria, habilidade} = req.body;
    pokedex.push({id: idAuto, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade});
    res.status(200).redirect("/");
    

});

//          ACIMA APENAS CONFIGURAÇÕES GERAIS

let pokedex = [
    {
        id: 1,
        nome: "Pikachu",
        tipo:"Eletric",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        descricao:"Pikachu pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas.",
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
        descricao:"Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente",
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
        descricao:"Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.",
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
        descricao:"Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.",
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
        descricao:"Muito dócil. Se atacado, ele geralmente levanta areia para se proteger, em vez de revidar.",
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
        descricao:"Seu DNA é quase o mesmo que o de Mew. No entanto, seu tamanho e disposição são muito diferentes.",
        altura:"2.0 m",
        peso:"122.0 Kg",
        categoria:"CategoryGenetic",
        habilidade:"Pressure",
    },

];


