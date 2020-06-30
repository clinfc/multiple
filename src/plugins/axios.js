import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:9794',
  timeout: 3500
})

instance.interceptors.response.use(response => {
  console.log(response);
  let { status, data } = response
  if (status === 200) {
    return data
  }
  return Promise.reject(response)
}, error => {
  return Promise.reject(error)
})

export default instance
