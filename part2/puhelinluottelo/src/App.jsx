import { useEffect, useState } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'
import personService from './services'
import Notification from './Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null) 
  const [messageType, setMessageType] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const showNotification = (text, type) => {
    setMessage(text)
    setMessageType(type)
    setTimeout(() => {
      setMessage(null)
      setMessageType('')
    }, 5000)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(person => person.name === newName)
  
    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to phonebook. Do you want to update the number?`
      )
  
      if (confirmUpdate) {
        const updatedPerson = { ...existingPerson, number: newNumber }
  
        personService
          .update(existingPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person =>
              person.id !== existingPerson.id ? person : returnedPerson
            ))
            showNotification(`Updated ${newName}'s number`, 'success')
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      const personObject = { name: newName, number: newNumber }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          showNotification(`Added ${newName}`, 'success')
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id) 
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          setMessage(`${name} was successfully deleted`)
          setMessageType('success')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(error => {
          setMessage(`${name} was already removed from the server`)
          setMessageType('error')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          setPersons(persons.filter(person => person.id !== id)) 
        })
    }
  }

  const personChange = (event) => {
    setNewName(event.target.value)
  }
  const numberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const filterChange = (event) => {
    setFilter(event.target.value)
  }

  const personToShow = filter 
    ? persons.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} type={messageType}/>

      <Filter filter={filter} filterChange={filterChange}/>

      <h2>Add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        personChange={personChange}
        newNumber={newNumber}
        numberChange={numberChange}
        />

      <h2>Numbers</h2>
      <Persons personToShow={personToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
