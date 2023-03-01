import {pokemonMock} from '../../../__mocks__/pokemons.mock'
import {POKEDEX_TYPE} from '../../type/pokedex/pokedexType'
import pokedexReducer from './pokedexReducer'

describe('when pokedexReducer is called', () => {
  test('pokedexReducer', () => {
    const pokedexReducerReducer = pokedexReducer(
      {},
      {type: POKEDEX_TYPE.GET_POKEAPI, payload: pokemonMock},
    )
    expect(pokedexReducerReducer.pokeapi[0].name).toEqual('bulbasaur')
  })
})
