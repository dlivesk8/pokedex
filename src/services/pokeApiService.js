import clienteAxios, {URL} from '../config/axios'
import {POKEDEX_ACTIONS} from '../redux/action/pokedex/pokedexAction'

const versions = ['red', 'blue', 'yellow']

export const getPokemons = () => {
  const maxPokemon = process.env.REACT_APP_MAX_POKEMON
  const url = `${URL.POKEMON}?limit=${maxPokemon}&offset=0`

  return async dispatch => {
    await clienteAxios
      .get(url)
      .then(response =>
        dispatch(POKEDEX_ACTIONS.getPokeApi(response.data.results)),
      )
      .catch(error => console.log(`[GET]  Error: `, error))
  }
}

export const searchPokemon = async name => {
  const url = `${URL.POKEMON}/${name}`

  return await clienteAxios
    .get(url)
    .then(async response => {
      const types = []
      const abilities = []
      const moves = []

      const enconters = await getEncounters(response.data.id)
      const evolutions = await getPokemonSpecies(response.data.species.url)
      response.data.types.map(element => types.push(element.type.name))
      response.data.moves.map(element => moves.push(element.move.name))
      response.data.abilities.map(element =>
        abilities.push(element.ability.name),
      )

      const pokemon = {types, evolutions, moves, abilities, enconters}

      return pokemon
    })
    .catch(error => console.log(`[GET]  Error: ${url}`, error))
}

const getPokemonSpecies = async url => {
  return await clienteAxios
    .get(url)
    .then(async response => {
      const urlEvolutionChain = response.data.evolution_chain.url
      const evolutions = await getEvolutionChain(urlEvolutionChain)
      return evolutions
    })
    .catch(error => console.log(`[GET]  Error: ${url}`, error))
}

const getEvolutionChain = async urlEvolutionChain => {
  return await clienteAxios
    .get(urlEvolutionChain)
    .then(response => {
      return getEvolutions(response.data.chain)
    })
    .catch(error => console.log(`[GET]  Error: ${urlEvolutionChain}`, error))
}

const getEvolutions = chain => {
  const evolutions = []

  const findEvolution = evolvesTo => {
    evolvesTo.map(evolve => {
      const newEvolution = evolve.species.name
      evolutions.push(newEvolution)
      if (evolve.evolves_to.length > 0) findEvolution(evolve.evolves_to)
      return evolutions
    })
  }

  if (!chain.is_baby) evolutions.push(chain.species.name)
  findEvolution(chain.evolves_to)

  return evolutions
}

const getEncounters = async pokemonId => {
  const url = `${URL.POKEMON}/${pokemonId}/encounters`

  return await clienteAxios
    .get(url)
    .then(response => {
      const encounters = []

      response.data.map(encounter =>
        encounter.version_details.map(detail => {
          if (versions.includes(detail.version.name))
            encounters.push(encounter.location_area.name)
          return detail
        }),
      )

      const encountersUniques = encounters.filter((encounter, index, array) => {
        return array.indexOf(encounter) === index
      })

      return encountersUniques
    })
    .catch(error => console.log(`[GET]  Error: ${url}`, error))
}
