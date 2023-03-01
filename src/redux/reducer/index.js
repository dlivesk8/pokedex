import {combineReducers} from 'redux'
import pokedexReducer from './pokedex/pokedexReducer'

export default combineReducers({
  pokedex: pokedexReducer,
})
