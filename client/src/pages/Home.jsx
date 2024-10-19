import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Box, Typography } from '@mui/material';
import { grayColor } from '../constants/color';

const Home = () => {
  return (
    <Box height={"100%"} bgcolor={grayColor}>
      <Typography p={"2rem"} textAlign={"center"} variant='h5'>
        Select a friend to chat
      </Typography>
    </Box>
  )
}

export default AppLayout()(Home);
