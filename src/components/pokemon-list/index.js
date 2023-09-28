import { Link } from "react-router-dom";
import React, { useContext } from 'react'
import { PokemonCard } from "../pokemon-card";
import { ThemeContext } from "../../constexts/theme-context";
import { Button } from "../button";
import * as S from './style';

const PokemonList = ({ loading, pokemons, filterPokemons, handleClick }) => {
    const [{ theme }] = useContext(ThemeContext);
    return (
        <S.Container theme={theme}>
            {
                loading ? 'Carregando dados...' :
                    <>

                        <S.List theme={theme} >
                            {
                                filterPokemons(pokemons).length > 0 ?
                                    filterPokemons(pokemons).map((pokemon, index) => {
                                        return (
                                            <Link


                                                key={index} to={`/details/${pokemon.id}`}>
                                                <PokemonCard
                                                    id={pokemon.id} name={pokemon.name}
                                                    sprite={pokemon.sprites.front_default}
                                                    types={pokemon.types}
                                                />
                                            </Link>
                                        )
                                    })
                                    : null
                                    // <h3>Pokemon não encontrado no filtro. Tente a Lupa </h3>
                            }
                        </S.List>
                        <Button onClick={handleClick}>Carregar mais</Button>
                    </>
            }
        </S.Container>
    )
}

export { PokemonList }