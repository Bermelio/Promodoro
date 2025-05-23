import './App.css';
import Navbar from './components/Navbar/Navbar.tsx';
import Footer from './components/Footer/Footer.tsx'
import Menu from './components/Menu/Menu.tsx';
import Clock from './components/Clock/Clock.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/clock' element={<Clock/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App