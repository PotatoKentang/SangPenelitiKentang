import { BACKEND_URL } from '@env'
import axios from 'axios'

export default axios.create({
  baseURL: BACKEND_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    'Server':'waitress'
  },
})

