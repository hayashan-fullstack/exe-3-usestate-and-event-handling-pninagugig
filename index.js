import React, { useState } from 'react'
import ReactDOM from "react-dom";

const PrintRows =(props) => {
  return(
  <div>
    <h3>{props.name}  <br></br>{props.number}</h3>
    </div>)
}
const Print = (props) =>{
return (
  props.persons.map(person => <PrintRows key={person.number} name={person.name}  number={person.number}/>))
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Brikman Ahuvi', number: '058-325-0338' },
    { name: 'Gugig Pnina', number: '055-678-0851'},
    { name: 'Levi Leah', number: '058-329-5987'},
    { name: 'Zeivald Shoshi', number: '055-678-5281' },
  ])
  const [ newName, setNewName ] = useState('New contact...')
  const [ newNumber, setNewNumber ] = useState('New phone...')

  const addPerson =(event) =>{
    event.preventDefault()
    console.log('button clicked')
    console.log(persons)
    const personObject={
      name: newName, 
      number: newNumber,
    }
    setPersons(persons.concat(personObject))
  }
  const handlePerson=(event)=>{
    setNewName(event.target.value)
  }
  const handleNumber=(event)=>{
    setNewNumber(event.target.value)
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <div>
          <form onSubmit={addPerson}>
            
            name: <input value={newName} onChange={handlePerson}/>
            number: <input value={newNumber} onChange={handleNumber}/>
            <div><button type="submit">add</button></div>
          </form>
        </div>
      </form>
      {/* <h2>Persons</h2> */}
      { <Print persons={persons}/> }
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root") );

