import React from 'react'
import { Box } from '@mui/material';

import HeroBanner from '../components/hero-banner.component';
import SearchExercises from '../components/search-exercises.component';
import Exercises from '../components/exercises.component';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home;