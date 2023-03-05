const express = require('express')
const randomName = require('node-random-name')
const db = require("./db");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let body = '<h1>Full Cycle Rocks!</h1>'

    db.insertPeople(randomName())

    db.getPeople((results) => {

        body += '\n<ul>'
        results.map(result => {
            body +=`<li>${result.name}</li>`
        })
        body += '\n</ul>'

        res.send(body)
    });
})

app.listen(port, () => {
    console.log(`App started port: ${port}`)
})