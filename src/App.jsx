import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Watch from './pages/Watch'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/watch' element={<Watch />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App
