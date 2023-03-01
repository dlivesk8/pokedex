import React from 'react'
import {act, fireEvent, render, screen} from '@testing-library/react'
import reactRedux from 'react-redux'
import clienteAxios from '../../config/axios'
import {pokemonMock} from '../../__mocks__/pokemons.mock'
import {searchPokemonMock} from '../../__mocks__/searchPokemon.mock'
import {encountresMock} from '../../__mocks__/encountres.mock'
import {speciesMock} from '../../__mocks__/species.mock'
import {evolutionsMock} from '../../__mocks__/evolutions.mock'
import Pokedex from './Pokedex'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

describe('when component Pokedex is rendered', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

  beforeEach(() => {
    const mockStore = {pokedex: {pokeapi: pokemonMock}}
    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)
    useSelectorMock.mockImplementation(selector => selector(mockStore))

    clienteAxios.get.mockResolvedValueOnce({data: searchPokemonMock})
    clienteAxios.get.mockResolvedValueOnce({data: encountresMock})
    clienteAxios.get.mockResolvedValueOnce({data: speciesMock})
    clienteAxios.get.mockResolvedValueOnce({data: evolutionsMock})
  })

  it('title', async () => {
    await act(async () => render(<Pokedex />))

    const title = screen.getByText('Pokedex')
    expect(title).toBeDefined()
  })

  it('button Search', async () => {
    await act(async () => render(<Pokedex />))

    const buttonSearch = screen.getByRole('button', {name: 'Search'})
    const input = screen.getByDisplayValue('')

    expect(buttonSearch).toBeDefined()

    clienteAxios.get.mockResolvedValueOnce({data: searchPokemonMock})
    clienteAxios.get.mockResolvedValueOnce({data: encountresMock})
    clienteAxios.get.mockResolvedValueOnce({data: speciesMock})
    clienteAxios.get.mockResolvedValueOnce({data: evolutionsMock})

    fireEvent.change(input, {target: {value: 'charizard'}})
    expect(input.value).toBe('charizard')

    await act(async () => {
      fireEvent.click(buttonSearch)
    })
  })

  it('buttons Pokemon Random', async () => {
    await act(async () => render(<Pokedex />))

    const buttonRandom = screen.getByRole('button', {name: 'Pokemon Random'})

    expect(buttonRandom).toBeDefined()

    clienteAxios.get.mockResolvedValueOnce({data: searchPokemonMock})
    clienteAxios.get.mockResolvedValueOnce({data: encountresMock})
    clienteAxios.get.mockResolvedValueOnce({data: speciesMock})
    clienteAxios.get.mockResolvedValueOnce({data: evolutionsMock})

    await act(async () => {
      fireEvent.click(buttonRandom)
    })
  })
})
