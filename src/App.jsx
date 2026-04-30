import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Home';
import Projects from './pages/projects/Projects';
import Experience from './pages/experience/Experience';
import Navbar from './components/navbar/Navbar';
import Contact from './pages/contact/Contact';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div className='h-screen w-screen lg:fixed lg:top-0  lg:left-0 lg:flex lg:justify-center lg:items-center  backImage'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Navbar />
    </ThemeProvider>
  )
}

export default App