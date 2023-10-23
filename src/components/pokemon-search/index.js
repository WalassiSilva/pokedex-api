import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../constexts/theme-context';
import { getPokemon } from '../../services-api';
import { PokemonCard } from '../pokemon-card';
import { Link } from 'react-router-dom';
import * as S from './style';

const PokemonSearch = ({ inputValue, setInputValue, onSearchBtn, ...rest }) => {
    const [{ theme }] = useContext(ThemeContext)
    const [pokemon, setPokemon] = useState('');
    const [disableBtn, setDisableBtn] = useState(true)
    const [notFound, setNotFound] = useState(false);

    const handleBtnSearch = () => {
        const fetchData = async () => {

            const result = await getPokemon(inputValue);
            setNotFound(false);
            setPokemon(null);


            if (!result) {
                setNotFound(true);
                return;
            }

            setPokemon(result);
            return await result;
        }
        fetchData();
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (e.target.value !== '' && e.target.value !== ' ') {
            setDisableBtn(false)
        } else {
            setDisableBtn(true);
            setPokemon(undefined);
            setNotFound(false)
        }
    }

    return (

        <S.Search theme={theme}>
            <input {...rest}
                value={inputValue}
                onChange={handleInputChange}
                type='search'
                autoFocus />

            <button disabled={disableBtn} onClick={handleBtnSearch}
                style={{ cursor: disableBtn ? 'not-allowed' : 'pointer' }}
            >🔍</button>

            <S.PokemonResult>
                {pokemon ? (
                    <Link to={`/details/${pokemon.id}`}>
                        <PokemonCard
                            id={pokemon.id} name={pokemon.name}
                            sprite={pokemon.sprites.other['official-artwork'].front_default}
                            types={pokemon.types}
                        />
                    </Link>
                ) : null
                }

                {notFound && <S.NotFound>😢 Busca inválida! 😢 </S.NotFound>}
            </S.PokemonResult>
        </S.Search>


    )
}

export { PokemonSearch };