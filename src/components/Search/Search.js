import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './Search.scss'

const Search = ({onClickRandom, onClickSearch}) => {
  const [searchPokemon, setSearchPokemon] = useState('')

  const handleChange = e => {
    const pokemonSearch = e.target.value.toLowerCase()
    setSearchPokemon(pokemonSearch)
  }

  const random = () => {
    setSearchPokemon('')
    onClickRandom()
  }

  return (
    <div className="search-container">
      <div className="search">
        <input
          className="search-input"
          value={searchPokemon}
          onChange={e => handleChange(e)}
          onKeyPress={() => onClickSearch(searchPokemon)}
          placeholder="charizard..."
        />
        <button
          className="search-button"
          onClick={() => onClickSearch(searchPokemon)}
        >
          <span>Search</span>
        </button>
      </div>
      <div className="random">
        <button className="random-button" onClick={() => random()}>
          <span>Pokemon Random</span>
        </button>
      </div>
    </div>
  )
}

Search.propTypes = {
  onClickRandom: PropTypes.func,
  onClickSearch: PropTypes.func,
}

export default Search
