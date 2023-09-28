import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPokemon, getPokemonAbility } from '../services-api';
import { Header } from '../components/header'
import { PokemonDetails } from '../components/pokemon-details';
import { ThemeContext } from '../constexts/theme-context';

const Details = () => {

  const [pokemon, setPokemon] = useState({ details: '', abilities: [] });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [{theme}] = useContext(ThemeContext)

  useEffect(() => {
    const fetchData = async () => {
      const pokemonDetail = await getPokemon(id);
      const pokemonAbilities = await Promise.all(pokemonDetail.abilities.map(async ability => {
        return await getPokemonAbility(ability.ability.name)
      }))

      setPokemon({
        details: pokemonDetail,
        abilities: pokemonAbilities
      })

      setLoading(false);
    }
    fetchData();
  }, [id])
  return (
    <>
      <Header />
      <div>
        <PokemonDetails theme={theme}
          id={pokemon.details.id}
          name={pokemon.details.name}
          sprite={pokemon.details.sprites?.other.dream_world.front_default ?? pokemon.details.sprites?.front_default }
          types={pokemon.details.types}
          abilities={pokemon.abilities}
          moves={pokemon.details.moves}
          pokemon={pokemon}
        />
      </div>
    </>
  )
}

export { Details }