import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
       mt: { lg: '180px', xs: '70px' }, 
       ml: { sm: '50px' }
      }}
      position='relative'
      p='20px'
    >
      <Typography 
        fontWeight={600}
        color='#FF2625'
        fontSize='26px'
        pl='3px'
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '40px' }
        }}
        lineHeight='60px'
        mb='5px'
        mt='10px'
      >
        Sweat, Rest <br/> and Repeat
      </Typography>
      <Typography
        fontSize='22px'
        lineHeight='35px'
        mb={3}
      >
        Check out the most effective exercises.
      </Typography>
      <Button 
        variant='contained'
        color='error'
        sx={{
          backgroundColor: '#FF2526',
          padding: '10px 20px',
          fontSize: '18px'
        }}
      >
        Explore Exercises
      </Button>
      <Typography 
        fontSize='200px'
        fontWeight={600}
        color='#FF2625'
        letterSpacing='30px'
        sx={{
          opacity: '0.3',
          display: { lg: 'block', xs: 'None'}
        }}
        mt='100px'
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner