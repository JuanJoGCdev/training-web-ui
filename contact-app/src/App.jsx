import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBarComponent'
import FormComponent from './components/FormComponent'

function App() {
const [formOpen, setFormOpen] = useState(false)
  const toggleForm = () =>{
    setFormOpen(!formOpen)
}
  
  
  return (
    <>
      <NavBar toggleForm={toggleForm} formOpen={formOpen}/>
      {formOpen && (

      <FormComponent/>
      )}
      
    </>              
  )
}

export default App
