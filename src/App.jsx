import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
