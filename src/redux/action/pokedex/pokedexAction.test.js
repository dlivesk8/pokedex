import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import clienteAxios from '../../../config/axios'
import {pokemonMock} from '../../../__mocks__/pokemons.mock'
import {POKEDEX_ACTIONS} from './pokedexAction'

jest.mock('../../../config/axios')
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('when getPokeApi is called', () => {
  test('getPokeApi', async () => {
    const mockedResponse = {data: pokemonMock}
    clienteAxios.get.mockResolvedValue(mockedResponse)
    const store = mockStore(mockedResponse)
    await store.dispatch(POKEDEX_ACTIONS.getPokeApi)
    expect(store.getState()).toEqual(mockedResponse)
  })
})
