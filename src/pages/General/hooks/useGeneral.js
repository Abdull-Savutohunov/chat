
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import React from "react"
import { getUser, postUser } from "../api"
import { parseJSON } from './../../../helper';
import { useNavigate } from 'react-router-dom';


const useGeneral = () => {
  const  [isLoading , setIsLoading] = React.useState(false)
  const [users , setUsers] = React.useState(null)
  const [disabled , setDisabled] = React.useState(false)
  const navigate = useNavigate()
  const goToChatPage = () => navigate('/chat')

  const handleGoogleAuth = () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    return signInWithPopup(auth , provider)
  }
  function postData(data , uid , setShowLogin){
    const request = postUser(data , uid)
    setDisabled(true)

    setIsLoading(true)

    request
    .then(() => {
      localStorage.setItem('uid', data.userID)
      setShowLogin(false)
      goToChatPage()
    })
    .finally(() => setDisabled(false))
  }

  React.useEffect(() => {
    const request = getUser()
    request 
      .then(res => {
        const data =
          Object
            .entries(res.data)
            .map(([ , value]) => value)

        setUsers(data)
      })
  }, [])
  return {
    handleGoogleAuth,
    postData,
    isLoading,
    users,  
    disabled,
    goToChatPage,
    navigate,
  }
}

export default useGeneral
