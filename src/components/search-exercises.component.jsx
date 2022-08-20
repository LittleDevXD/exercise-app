import React from 'react';

import { Box, Stack, TextField, Typography, Button } from '@mui/material';

const SearchExercises = () => {
  return (
    <Stack 
      alignItems='center'
      justifyContent='center'
    >
      <Typography 
        fontWeight={600}
        textAlign='center'
        mt='50px'
        sx={{
          fontSize: { sm: '44px', xs: '40px'}
        }}
      >
        Awesome Exercises You  <br/> Should Know
      </Typography>
      <Box
        mt='30px'
        positon="relative"
        mb='50px'
      >
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '200px'},
            height: '72px',
            borderRadius: '40px'
          }}
          placeholder='Search Exercises'
          value=''
          onChange={(e) => {}}
          type='text'
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: '#FF2526',
            color: '#fff',
            textTransform: 'None',
            width: { lg: '175px', xs: '80px'},
            fontSize: { lg: '20px', xs: '14px'},
            height: '56px',
            right: 0
          }}
          height='60px'
          position='absolute'
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises