import React from 'react'
import {render} from '@testing-library/react'
import App from './App'
import clienteAxios from './config/axios'
import {searchPokemonMock} from './__mocks__/searchPokemon.mock'
import {encountresMock} from './__mocks__/encountres.mock'
import {speciesMock} from './__mocks__/species.mock'
import {evolutionsMock} from './__mocks__/evolutions.mock'
import {act} from 'react-dom/test-utils'

describe('when App is rendered', () => {
  beforeEach(() => {
    clienteAxios.get.mockResolvedValueOnce({data: searchPokemonMock})
    clienteAxios.get.mockResolvedValueOnce({data: encountresMock})
    clienteAxios.get.mockResolvedValueOnce({data: speciesMock})
    clienteAxios.get.mockResolvedValueOnce({data: evolutionsMock})
  })

  it('App', async () => {
    await act(async () => {
      const {container} = render(<App />)
      expect(container.childElementCount).toEqual(0)
    })
  })
})
