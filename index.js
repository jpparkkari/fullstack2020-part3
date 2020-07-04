const express = require('express')
const app = express()

app.use(express.json())

let persons = [
 
          {
            "name": "Arto Hellas",
            "number": "040-123456",
            "id": 1
          },
          {
            "name": "Ada Lovelace",
            "number": "39-44-5323523",
            "id": 2
          },
          {
            "name": "Dan Abramov",
            "number": "12-43-234345",
            "id": 3
          },
          {
            "name": "Mary Poppendieck",
            "number": "39-23-6423122",
            "id": 4
          }
        ]
    

//getall
app.get('/api/persons', (req, res) => {
    res.json(persons)
  })
app.get('/info', (req, res) => {
    console.log(persons.length)
    const date = new Date()
    res.send(`
        <p>Phonebook has info for ${persons.length} persons</p>
        <p>${date}</p>
        `)
})
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find( person => person.id === id )
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
    console.log(person)
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
  
