const express = require('express')
const server = express()

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt velit aspernatur enim sit error, consequuntur odit, magnam aut quisquam libero ipsum tempora. Obcaecati commodi quis dignissimos blanditiis quisquam, rerum expedita.",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt velit aspernatur enim sit error, consequuntur odit, magnam aut quisquam libero ipsum tempora. Obcaecati commodi quis dignissimos blanditiis quisquam, rerum expedita.",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt velit aspernatur enim sit error, consequuntur odit, magnam aut quisquam libero ipsum tempora. Obcaecati commodi quis dignissimos blanditiis quisquam, rerum expedita.",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em Família",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt velit aspernatur enim sit error, consequuntur odit, magnam aut quisquam libero ipsum tempora. Obcaecati commodi quis dignissimos blanditiis quisquam, rerum expedita.",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintura",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt velit aspernatur enim sit error, consequuntur odit, magnam aut quisquam libero ipsum tempora. Obcaecati commodi quis dignissimos blanditiis quisquam, rerum expedita.",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
        title: "Recortes",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt velit aspernatur enim sit error, consequuntur odit, magnam aut quisquam libero ipsum tempora. Obcaecati commodi quis dignissimos blanditiis quisquam, rerum expedita.",
        url: "http://rocketseat.com.br"
    },
]

const reversedIdeas = [...ideas].reverse()

server.use(express.static('public'))

const nunjucks = require('nunjucks')
nunjucks.configure('views', {
    express: server,
    noCache: true,
})

server.get('/', function (req, res) {

    let lastIdeas = []
    for (idea of reversedIdeas) {
        if(lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }

    return res.render('index.html', { ideas: lastIdeas })
})

server.get('/ideias', function (req, res) {
    return res.render('ideias.html', { ideas: reversedIdeas })
})

server.listen(3333)