import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction='row'
      sx={{
        gap: { sm: '122px', xs: '40px'}, 
        mt: { sm: '32px', xs: '20px'},
      }}
      px='20px' 
      alignItems='center'
    >
      <Link to='/'>
        <img src={Logo} alt="logo" style={{
          width: '48px', height: '48px', margin: '0 20px'
        }} />
      </Link>
      
      <Stack 
        direction='row'
        alignItems='flex-end'
        gap='40px'
        fontSize='24px'
        sx={{
          color: 'black'
        }}
      >
        <Link to='/' style={{
          borderBottom: '3px solid #FF2625',
          textDecoration: 'None',
          color: '#3A1212'
        }}>Home</Link>
        <a href='#exercises' style={{
          textDecoration: 'None',
          color: '#3A1212'
        }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar;