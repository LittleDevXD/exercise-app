import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { Box } from '@mui/material';

import Navbar from './components/navbar.component';
import Footer from './components/footer.component';
import Home from './pages/home.page';
import ExerciseDetails from './pages/exercise-details.page';

import './App.css';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/exercise/:id" element={<ExerciseDetails/>} />
        </Routes>
      <Footer/>
    </Box>
  )
}

export default App