import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import Search from './Search'

const defaultProps = {
  onClickRandom: jest.fn(),
  onClickSearch: jest.fn(),
}

describe('when component Search is rendered', () => {
  beforeEach(() => render(<Search {...defaultProps} />))

  it('texts', () => {
    const textSearch = screen.getByText('Search')
    const textRandom = screen.getByText('Pokemon Random')

    expect(textSearch).toBeDefined()
    expect(textRandom).toBeDefined()
  })

  it('input', () => {
    const input = screen.getByDisplayValue('')

    expect(input).toBeDefined()
    expect(input.value).toBe('')

    fireEvent.change(input, {target: {value: 'charizard'}})
    expect(input.value).toBe('charizard')
  })

  it('input enter', () => {
    const input = screen.getByDisplayValue('')

    fireEvent.change(input, {target: {value: 'charizard'}})
    fireEvent.keyPress(input, {key: 'Enter', charCode: 13})
  })

  it('button search', () => {
    const buttonSearch = screen.getByRole('button', {name: 'Search'})

    expect(buttonSearch).toBeDefined()
    fireEvent.click(buttonSearch)
  })

  it('button Pokemon Random', () => {
    const buttonRandom = screen.getByRole('button', {name: 'Pokemon Random'})

    expect(buttonRandom).toBeDefined()
    fireEvent.click(buttonRandom)
  })
})
