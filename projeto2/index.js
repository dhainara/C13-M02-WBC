import express from "express" //importanto o express
import path from "path" //define caminhos padroes

const __dirname = path.resolve(path.dirname('')) //serve para irnformar o caminho

console.log(__dirname)


const app = express() //instanciando o express dentro da const app

app.set("view engine", "ejs") //faz com que o express reconehça o ejs como html
app.use(express.static(path.join(__dirname, "public")))

const port = 3001

app.listen(port, () => { //listen é uma funcao para criar um servidor
    console.log(`Running port ${port}`)
})

let pesquisa = []
let pokemon = [
    {
        numero: "",
        nome: "",
        tipo: "",
        imagem: "",
        descricao: "",
        altura: "1,90m",
        peso: "155.0kg",
        categoria: "Legendário",
        habilidade: "Intimidar, "

    },
    {
        numero: "",
        nome: "",
        tipo: "",
        imagem: "",
        descricao: "",
        altura: "",
        peso: "",
        categoria: "",
        habilidade: ""

    },
    {
        numero: "",
        nome: "",
        tipo: "",
        imagem: "",
        descricao: "",
        altura: "",
        peso: "",
        categoria: "",
        habilidade: ""

    },
    {
        numero: "",
        nome: "",
        tipo: "",
        imagem: "",
        descricao: "",
        altura: "",
        peso: "",
        categoria: "",
        habilidade: ""

    },
    {
        numero: "",
        nome: "",
        tipo: "",
        imagem: "",
        descricao: "",
        altura: "",
        peso: "",
        categoria: "",
        habilidade: ""

    },
    {
        numero: "",
        nome: "",
        tipo: "",
        imagem: "",
        descricao: "",
        altura: "",
        peso: "",
        categoria: "",
        habilidade: ""

    },
    {
        numero: "",
        nome: "",
        tipo: "",
        imagem: "",
        descricao: "",
        altura: "",
        peso: "",
        categoria: "",
        habilidade: ""

    },
    {
        numero: "",
        nome: "",
        tipo: "",
        imagem: "",
        descricao: "",
        altura: "",
        peso: "",
        categoria: "",
        habilidade: ""

    },
    {
        numero: "",
        nome: "",
        tipo: "",
        imagem: "",
        descricao: "",
        altura: "",
        peso: "",
        categoria: "",
        habilidade: ""

    },
    {
        numero: "",
        nome: "",
        tipo: "",
        imagem: "",
        descricao: "",
        altura: "",
        peso: "",
        categoria: "",
        habilidade: ""

    },
    {
        numero: "",
        nome: "",
        tipo: "",
        imagem: "",
        descricao: "",
        altura: "",
        peso: "",
        categoria: "",
        habilidade: ""

    },
    {
        numero: "",
        nome: "",
        tipo: "",
        imagem: "",
        descricao: "",
        altura: "",
        peso: "",
        categoria: "",
        habilidade: ""

    },
]

app.get('/', (req, res) => { //get é um metodop do https/html que serve para trazer uma pagina
    res.render('index.ejs', {
        pokemon
    })
})

app.get('/detalhes', (req, res) => {

    res.render('Eu sou a rota detalhes')
})
