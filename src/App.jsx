import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
