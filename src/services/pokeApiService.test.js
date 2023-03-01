import clienteAxios from '../config/axios'
import {encountresMock} from '../__mocks__/encountres.mock'
import {evolutionsMock} from '../__mocks__/evolutions.mock'
import {pokemonMock} from '../__mocks__/pokemons.mock'
import {searchPokemonMock} from '../__mocks__/searchPokemon.mock'
import {speciesMock} from '../__mocks__/species.mock'
import {getPokemons, searchPokemon} from './pokeApiService'

jest.mock('../config/axios')

describe('Client EndDate', () => {
  it('should call axios for handleGetEndDate and return a response', async () => {
    clienteAxios.get.mockResolvedValueOnce({data: {results: pokemonMock}})
    const resolve = await getPokemons()

    expect(resolve).not.toBeNull()
  })

  it('should call axios and return a error', async () => {
    clienteAxios.get.mockRejectedValueOnce(new Error('error'))
    const response = await getPokemons()

    expect(response).not.toBeNull()
  })

  it('should call axios for handleGetEndDate and return a response', async () => {
    clienteAxios.get.mockResolvedValueOnce({data: searchPokemonMock})
    clienteAxios.get.mockResolvedValueOnce({data: encountresMock})
    clienteAxios.get.mockResolvedValueOnce({data: speciesMock})
    clienteAxios.get.mockResolvedValueOnce({data: evolutionsMock})

    const resolve = await searchPokemon('mockPokemon')
    expect(resolve).not.toBeNull()
  })

  it('should call axios and return a error', async () => {
    clienteAxios.get.mockRejectedValueOnce(new Error('error'))

    const response = await searchPokemon('mockPokemon')
    expect(response).not.toBeNull()
  })

  it('should call axios and return a error', async () => {
    clienteAxios.get.mockResolvedValueOnce({data: searchPokemonMock})
    clienteAxios.get.mockRejectedValueOnce(new Error('error'))

    const response = await searchPokemon('mockPokemon')
    expect(response).not.toBeNull()
  })

  it('should call axios and return a error', async () => {
    clienteAxios.get.mockResolvedValueOnce({data: searchPokemonMock})
    clienteAxios.get.mockResolvedValueOnce({data: encountresMock})
    clienteAxios.get.mockRejectedValueOnce(new Error('error'))

    const response = await searchPokemon('mockPokemon')
    expect(response).not.toBeNull()
  })

  it('should call axios and return a error', async () => {
    clienteAxios.get.mockResolvedValueOnce({data: searchPokemonMock})
    clienteAxios.get.mockResolvedValueOnce({data: encountresMock})
    clienteAxios.get.mockResolvedValueOnce({data: speciesMock})
    clienteAxios.get.mockRejectedValueOnce(new Error('error'))

    const response = await searchPokemon('mockPokemon')
    expect(response).not.toBeNull()
  })
})
