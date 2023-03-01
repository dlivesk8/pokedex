import {render, screen} from '@testing-library/react'
import React from 'react'
import {informationMock} from '../../__mocks__/information.mock'
import Information from './Information'

const defaultProps = {
  data: informationMock,
}

describe('when component Information is rendered', () => {
  beforeEach(() => render(<Information {...defaultProps} />))

  it('type', () => {
    const textTitle = screen.getByText('Type')
    const textType = screen.getByText('psychic')

    expect(textTitle).toBeDefined()
    expect(textType).toBeInTheDocument()
  })

  it('evolution', () => {
    const textTitle = screen.getByText('Evolution')
    const textEvolution1 = screen.getByText('abra')
    const textEvolution2 = screen.getByText('kadabra')
    const textEvolution3 = screen.getByText('alakazam')

    expect(textTitle).toBeDefined()
    expect(textEvolution1).toBeInTheDocument()
    expect(textEvolution2).toBeInTheDocument()
    expect(textEvolution3).toBeInTheDocument()
  })

  it('moves', () => {
    const textTitle = screen.getByText('Moves')
    const textMove1 = screen.getByText('mega-punch')
    const textMove2 = screen.getByText('fire-punch')
    const textMove3 = screen.getByText('ice-punch')

    expect(textTitle).toBeDefined()
    expect(textMove1).toBeInTheDocument()
    expect(textMove2).toBeInTheDocument()
    expect(textMove3).toBeInTheDocument()
  })

  it('abilities', () => {
    const textTitle = screen.getByText('Abilities')
    const textAbility1 = screen.getByText('synchronize')
    const textAbility2 = screen.getByText('inner-focus')
    const textAbility3 = screen.getByText('magic-guard')

    expect(textTitle).toBeDefined()
    expect(textAbility1).toBeInTheDocument()
    expect(textAbility2).toBeInTheDocument()
    expect(textAbility3).toBeInTheDocument()
  })

  it('enconters', () => {
    const textTitle = screen.getByText('Enconters')
    const textEncounter1 = screen.getByText('kanto-route-5-area')
    const textEncounter2 = screen.getByText('kanto-route-6-area')
    const textEncounter3 = screen.getByText('kanto-route-7-area')

    expect(textTitle).toBeDefined()
    expect(textEncounter1).toBeInTheDocument()
    expect(textEncounter2).toBeInTheDocument()
    expect(textEncounter3).toBeInTheDocument()
  })
})
