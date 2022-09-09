import React from 'react'
import axios from 'axios'

const getUser = (uId) => axios.get(`/users/${uId}.json`)

const [user , setUser] = React.useState(null)

const useUser = () => {

  const Get = (uId) => {
    const request = getUser(uId)
    request
      .then(res => {
        const data = res.data
        setUser(data)
      })
    return request
  }
  React.useEffect(() => {
    if(!uId) return 
    Get(uId)
  }, [uId])

  return {
    user
  }

}

const use = useUser

export const currentUser = {
  use
}
