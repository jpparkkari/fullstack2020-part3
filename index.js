require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

/* let persons = [
 
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
  */  

morgan.token('message', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :message'))
//app.use(morgan('tiny'))

const Person = require('./models/person')

//getall
app.get('/api/persons', (req, res) => {
    Person.find({}).then(people => {
      res.json(people)
  })
    //res.json(persons)
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
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
})

const generateId = () => {
  return Math.floor(Math.random() * 100000)
}

app.post('/api/persons', (req, res) => {

  const body = req.body

  if(!body.name || !body.number) {
    return res.status(400).json({
      error: 'name, number or both missing'
    })
  }
  /* not needed to check duplicates in 3.13
  if(persons.find( person => person.name === body.name)) {
    return res.status(400).json({
      error: 'name must be unique'
    })
  }
  */

  const person = new Person({
    name: body.name,
    number: body.number,
    //id: generateId(),
  })

  console.log(person)
  person.save().then(savedPerson => {
    res.json(savedPerson)
  })
  /*
  persons = persons.concat(person)
  console.log(persons)
  res.json(person)
  */
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
  
