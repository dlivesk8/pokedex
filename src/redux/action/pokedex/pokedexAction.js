import {POKEDEX_TYPE} from '../../type/pokedex/pokedexType'

const getPokeApi = payload => ({
  type: POKEDEX_TYPE.GET_POKEAPI,
  payload,
})

const POKEDEX_ACTIONS = {
  getPokeApi,
}

export {POKEDEX_ACTIONS}
