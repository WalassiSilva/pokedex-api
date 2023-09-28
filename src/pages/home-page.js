import React, { useEffect, useState } from 'react'
import { getPokemon, getPokemonList } from '../services-api';
import { Header } from '../components/header';
import { PokemonList } from '../components/pokemon-list';
import { SearchBar } from '../components/search-bar';

const Home = () => {

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);;
  const [pokePerPage, setPokePerPage] = useState(10);
  const [type, setType] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const getPokemonsData = async () => {
      const pokemonData = await getPokemonList(pokePerPage);
      const results = await Promise.all(pokemonData.map(async (pokemon) => {
        return await getPokemon(pokemon.name);
      }))

      setPokemons(results);
      setLoading(false);
    }

    getPokemonsData();
  }, [pokePerPage])

  const filterPokemons = (pokemons) => {
    return pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
    }).filter(pokemon => {
      return pokemon.types[0].type.name.includes(type) || pokemon.types[1]?.type.name.includes(type);
    })
  }



  const handleClick = () => {
    setPokePerPage(prev => prev + 10);
  }

  const clearPage = () => {
    setInputValue('');
    setType('');
  }

  return (
    <div>
      <Header clearPage={clearPage} />

      <>
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          type={type}
          setType={setType} />

        <PokemonList
          pokemons={pokemons}
          filterPokemons={filterPokemons}
          loading={loading}
          handleClick={handleClick}
        />
      </>
    </div>
  )
}

export { Home }