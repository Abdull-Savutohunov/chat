import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FcGoogle } from 'react-icons/fc'
import useGeneral from "../../hooks/useGeneral";
import LoginUser from "../Login/loginUser";

const Main = () => {
  const isAuth = localStorage.getItem('uid');
  const [user , setUser] = React.useState(null)
  const { 
          handleGoogleAuth   , 
          postData , 
          users, 
          goToChatPage,
        } = useGeneral()
  const [showLogin , setShowLogin] = React.useState(false)

  const onAuthorizarion = () => {
    handleGoogleAuth()
     .then(res => {
      const tokenResponse = res._tokenResponse
      const isNewUser = tokenResponse.isNewUser
      const userResponse = res.user

      setUser({
        email: tokenResponse.email,
        userId: tokenResponse.localId,
        photoUrl: tokenResponse.photoUrl,
        firstName: tokenResponse.firstName,
        lastName: tokenResponse.lastName,
        displayName: tokenResponse.displayName,
        metadata: res.user.metadata
      }) 

      
      if(isNewUser) return setShowLogin(true)

      const userId = userResponse.uid

      const isRegisterUser = users?.find(item => item.userId === userId)

      console.log(isRegisterUser);

      if(!isRegisterUser) return setShowLogin(true )

      // в случае даже когда user зреган

      localStorage.setItem('uid', userId)
      goToChatPage()

     })
  }

  const onSubmit = (data) => {
    const newData = {
      ...user,
      login: data.loginUser
    }

    postData(newData , user.userID, setShowLogin)
  }

  if(isAuth) return goToChatPage()


  return(
    <React.Fragment>
      {
        !showLogin ? 
          (
            <Box>
              <Grid 
                display='flex' 
                justifyContent={'center'} 
                alignItems={'center'} 
                height='80vh'
              >
                <Card style={{background: '#2979ff', color:'white'}}>
                  <Typography variant="h4" padding={'3rem'}>
                    Welcome to out chat To start get authorization
                  </Typography>

                  <Box 
                    textAlign={'center'} 
                    sx={{cursor:'pointer'}} 
                    paddingBottom='2rem'
                  >
                    <FcGoogle 
                      style={{fontSize:'4rem'}} 
                      onClick={onAuthorizarion}
                    />
                  </Box>
                </Card>
              </Grid>
            </Box>
        ) : (
          <LoginUser onSubmit={onSubmit} setShowLogin={setShowLogin}/>
        )
      }
    </React.Fragment>
  )
}



export default Main;