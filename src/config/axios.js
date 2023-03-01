import axios from 'axios'

const POKEMON = '/api/v2/pokemon'

export const URL = {POKEMON}

const clienteAxios = axios.create({
  baseURL: process.env.REACT_APP_MS_POKE_API,
})

export default clienteAxios
