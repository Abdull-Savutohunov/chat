import React from 'react'
import { Grid, Card, Typography, Button } from '@mui/material';
import { ImSad } from 'react-icons/im'
import useGeneral from './../../pages/General/hooks/useGeneral';

export const NotFound = () => {
  const positionStyles = {
    position:"relative",
    overflow:"visible"
  }
  const { navigate } = useGeneral()

  const goToBack = () => navigate(-1)


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
          <Typography variant='h5' className='mt-3'>Страница не найдена!</Typography>
        </Card>
        <Card className='text-center'>
          <Button onClick={goToBack} variant='outlined' className='m-3'>Вернутся назад</Button>
        </Card>
      </Card>
    </Grid>
  )
}
