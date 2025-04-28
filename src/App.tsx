
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Footer from "./components/Footer"

import Landing from './pages/Landing'
function App() {

  return (
    <>
  <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Landing/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  </>
  )
}

export default App
