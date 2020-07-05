const express = require('express')
const app = express()
const morgan = require('morgan')

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
    

morgan.token('message', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :message'))
//app.use(morgan('tiny'))

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

  if(persons.find( person => person.name === body.name)) {
    return res.status(400).json({
      error: 'name must be unique'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  console.log(person)
  persons = persons.concat(person)
  console.log(persons)
  res.json(person)
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
  
