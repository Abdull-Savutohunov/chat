import React from 'react'
import { Grid, Card, Typography, Button } from '@mui/material';
import { ImSad } from 'react-icons/im'

export const Notauth = () => {
  const positionStyles = {
    position:"relative",
    overflow:"visible"
  }
  const { navigate } = useGeneral()

  const goToAuth = () => navigate('/')


  return(
    <Grid 
    display={'flex'} 
    justifyContent="center" 
    alignItems={'center'} 
    height="70vh"
    >
      <Card style={positionStyles}>
        <Card className='p-5' style={positionStyles}>
          <ImSad className='display-3' style={{position:'absolute',top:"-2rem",left:'38%'}}/>
          <Typography variant='h5' className='mt-3'>Вы не авторизованы !</Typography>
        </Card>
        <Card className='text-center'>
          <Button onClick={goToAuth} variant='outlined' className='m-3'>Перейти на авторизацию</Button>
        </Card>
      </Card>
    </Grid>
  )
}
