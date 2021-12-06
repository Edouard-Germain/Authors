const express = require('express');
const port = 5000
const app = express();

const authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

// app.get('/',(req,res) =>{
//     res.send("hello")
// })

app.get('/authors/:id',(req,res) => {
    const { id } = req.params
    const num = parseInt(id) - 1
    const name = authors[num].name
    const country = authors[num].nationality
    res.send(`${country},${name}`)
    console.log(country,name)

})

app.get('/authors/:id/books', (req,res)=>{
    const { id } = req.params
    const num = parseInt(id) - 1
    const name = authors[num].name
    const books = authors[num].books.join()
    res.send(`${name}, ${books}`)
})

app.get ('/json/authors/:id',(req,res) =>{
    const {id} = req.params
    const num = parseInt(id)-1
    const name = authors[num].name
    const nationality = authors[num].nationality
    const obj = {nationality, name}
    const array = JSON.stringify(obj)
    res.json({
        name : name,
        nationality : nationality
    })

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })