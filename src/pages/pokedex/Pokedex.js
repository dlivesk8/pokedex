/* eslint-disable spaced-comment */
import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Information from '../../components/Information/Information'
import Search from '../../components/Search/Search'
import {getPokemons, searchPokemon} from '../../services/pokeApiService'
import './Pokedex.scss'

const Pokedex = () => {
  //** Redux **//
  const dispatch = useDispatch()
  const {pokeapi} = useSelector(state => state.pokedex)

  //** Hooks **//
  const [pokemonSelected, setPokemonSelected] = useState()

  //** Use Callbacks **//
  const searchInformationPokemon = useCallback(async data => {
    const {name, id} = data
    const {abilities, enconters, evolutions, moves, types} =
      await searchPokemon(data.name)
    const image = `${process.env.REACT_APP_POKEMON_IMAGE}/${id}.png`
    const newPokemon = {
      name,
      id,
      abilities,
      enconters,
      evolutions,
      moves,
      types,
      image,
    }
    setPokemonSelected(newPokemon)
  }, [])

  const randomPokemon = useCallback(pokemons => {
    const id = Math.floor(Math.random() * pokemons.length)
    const randomPokemon = pokemons[id]
    randomPokemon.id = id + 1
    return randomPokemon
  }, [])

  //** Use Effects **//
  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  useEffect(() => {
    if (pokeapi) {
      const pokemon = randomPokemon(pokeapi)
      searchInformationPokemon(pokemon)
    }
  }, [pokeapi])

  //** Methods **//
  const onClickRandom = () => {
    const pokemon = randomPokemon(pokeapi)
    searchInformationPokemon(pokemon)
  }

  const onClickSearch = pokemonSearch => {
    const findPokemon = pokeapi.find(poke => poke.name === pokemonSearch)
    findPokemon.id = pokeapi.findIndex(obj => obj.name === pokemonSearch) + 1
    searchInformationPokemon(findPokemon)
  }

  //** Renders **//
  return (
    pokemonSelected && (
      <div className="pokedex-container">
        <div className="title">Pokedex</div>
        <Search
          onClickRandom={() => onClickRandom()}
          onClickSearch={pokemonSearch => onClickSearch(pokemonSearch)}
        />
        <div className="name">
          <span>{pokemonSelected.name}</span>
        </div>
        <div className="image">
          <img src={pokemonSelected.image} alt="pokemon"></img>
        </div>
        <Information data={pokemonSelected} />
        {/* <pre>{JSON.stringify(pokemonSelected, null, 2)}</pre> */}
      </div>
    )
  )
}

export default Pokedex
