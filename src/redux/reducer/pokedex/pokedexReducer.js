import {POKEDEX_TYPE} from '../../type/pokedex/pokedexType'

const initialState = {}

const pokedexReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case POKEDEX_TYPE.GET_POKEAPI: {
      return {...state, pokeapi: payload}
    }
    default: {
      return state
    }
  }
}

export default pokedexReducer
