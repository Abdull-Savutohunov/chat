import axios from 'axios'

export const postUser = (data , uid) => {
  return axios.put(`/users/${uid}.json`, data)
}


export const getUser = () => {
  return axios.get('/users.json')
}