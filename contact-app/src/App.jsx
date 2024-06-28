import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBarComponent'
import FormComponent from './components/FormComponent'
import AppRoutes from './routes/AppRoutes'
import useFetch from './hooks/useFetch'

function App() {
  const { loading, error } = useFetch();
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
      <AppRoutes loading={loading} error={error} />
      
    </>              
  )
}

export default App
