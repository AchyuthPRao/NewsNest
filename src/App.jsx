import { React } from 'react'
import './App.css'
import Landing from './Components/Landing'
import Dashboard from './Components/Dashboard'
import Navbar from  "./Components/Navbar"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './Components/About'
import First from './Components/First'

function App() {
  return (
    <>
    <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<First/>} />
        <Route path='/land' element={<Landing/>} />
        <Route path='/layout' element={<Dashboard/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
