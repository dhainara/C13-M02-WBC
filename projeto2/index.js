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

const pokemon = [
    {
        id: 1,
        numero: "653",
        nome: "Fennekin",
        tipo: "Fogo",
        imagem: 'https://assets.pokemon.com/assets/cms2/img/pokemondex/full/653.png',
        descricao: "Dhainara",
        altura: "0,40m",
        peso: "9,4kg",
        categoria: "Fox",
        habilidade: "Blaze",
        deshab: "The Pokémon boosts its most proficient stat each time it knocks out a Pokémon."

    },
    {
        id: 2,
        numero: "698",
        nome: "Amaura",
        tipo: "Pedra, Gelo",
        imagem: 'https://assets.pokemon.com/assets/cms2/img/pokemondex/full/698.png',
        descricao: "Amaura é um pokémon tipo Pedra e Gelo. Ele é um pokemon ressucitado através de um Sail Fossil.",
        altura: "1.30m",
        peso: "25.2 kg",
        categoria: "Tundra",
        habilidade: "Refrigerate",
        deshab: "The Pokémon boosts its most proficient stat each time it knocks out a Pokémon.",
    },
    {
        id: 3,
        numero: "671",
        nome: "Florges",
        tipo: "Fada",
        imagem: 'https://assets.pokemon.com/assets/cms2/img/pokemondex/full/671.png',
        descricao: "Ele controla as flores que cresce. As nevascas de pétalas que Florges desencadeia são impressionantes em sua beleza e poder. ",
        altura: "1.10 m",
        peso: "10.0 kg",
        categoria: "Garden",
        habilidade: "Flower Veil",
        deshab: "The Pokémon boosts its most proficient stat each time it knocks out a Pokémon."
    },
    {
        id: 4,
        numero: "803",
        nome: "Poipole",
        tipo: "Poison",
        imagem: 'https://assets.pokemon.com/assets/cms2/img/pokemondex/full/803.png',
        descricao: "Este Ultra Beast é bastante apreciado para ser escolhido como o primeiro parceiro em seu próprio mundo.",
        altura: "0.60 m",
        peso: "1.80 kg",
        categoria: "Poison Pin",
        habilidade: "Beast Boost",
        deshab: "The Pokémon boosts its most proficient stat each time it knocks out a Pokémon."
    },
    {
        id: 5,
        numero: "417",
        nome: "Pachirisu",
        tipo: "Elétrico",
        imagem: 'https://assets.pokemon.com/assets/cms2/img/pokemondex/full/417.png',
        descricao: "Ele faz bolas de pelo que estalam com eletricidade estática e os armazena com bagas em buracos de árvores.",
        altura: "0.40 m",
        peso: "3.90 kg",
        categoria: "EleSquirrel",
        habilidade: "Run Away, Pickup",
        deshab: ["Enables a sure getaway from wild Pokémon.", "The Pokémon may pick up the item an opposing Pokémon used during a battle. It may pick up items outside of battle, too."]
    },
    {
        id: 6,
        numero: "730",
        nome: "Primarina",
        tipo: "Agua, Fada",
        imagem: 'https://assets.pokemon.com/assets/cms2/img/pokemondex/full/730.png',
        descricao: "Para Primaria, toda batalha é um estágio. Ele derruba sua presa com belos cantos e danças.",
        altura: "1.80 m",
        peso: "44.0 kg",
        categoria: "Soloist",
        habilidade: "Torrent",
        deshab: ["Powers up Water-type moves when the Pokémon's HP is low."]

    },
]

app.get('/', (req, res) => { //get é um metodop do https/html que serve para trazer uma pagina
    res.render('index.ejs', {
        pokemon
    })
})

app.get('/detalhes/:id/', (req, res) => {
    let poke = []
    pokemon.filter((element) => {
        if (element.id == req.params.id) {
            poke.push(element)
        }
    })

    console.log(pokemon)
    res.render('../views/detalhes', {
        poke
    })
})

app.get('/cadastro', (req, res) => {
    res.render('../views/cadastro', {
    })
})

app.post('/cadastro', (req, res) => {

    let id = pokemon[pokemon.length-1]. id + 1

    const { numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade } = req.body

    pokemon.push({ id: id, numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade })

    console.log(pokemon)

    res.redirect('/')
})