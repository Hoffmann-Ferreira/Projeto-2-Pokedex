import express from "express";
import path, { dirname } from "path"

const __dirname = path.resolve(path.dirname(""));

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

const port = 3001

app.listen(port,() => {
    console.log(`Rodando na porta ${port}`)
});

app.get("/", (req, res) => {
    res.render("index.ejs", {
        cavaleiros
    });

});

app.get("/pokemon", (req, res) =>{
    res.send("Eu sou a página do pokemon");
}); 
//          A CIMA APENAS CONFIGURAÇÕES GERAIS

let cavaleiros = [
    {
        nome: 'Aioros',
        singno: 'Touro'
    },
    {
    nome: 'Aldebaran',
    singno: 'Escorpião'
    },
    {
        nome: 'Afrodite',
        singno: 'Virgen'
        }
]
