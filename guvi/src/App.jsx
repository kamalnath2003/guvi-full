import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './pages/signup'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/home'
import Dashboard from './pages/Dashboard'
import Update from './pages/update'
import Nav from './assets/Nav'

function App() {

  return (

    
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='signup' element={<Signup/>}>
      </Route>
      <Route path='login' element={<Login/>}>
       </Route> 
       <Route path='/' element={<Home/>}></Route>
       <Route path='/dashboard/:id' element={<Dashboard/>}></Route>
       <Route path='/update/:id' element={<Update/>}></Route>

    </Routes>
    </BrowserRouter>

    


  )
}

export default App
