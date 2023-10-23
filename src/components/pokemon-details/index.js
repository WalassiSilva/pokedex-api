import React, { useContext } from 'react'
import { ThemeContext } from '../../constexts/theme-context'
import * as S from './style';

const PokemonDetails = ({ id, name, sprite, types, abilities, moves, pokemon }) => {
    const [{ theme, colorTypes }] = useContext(ThemeContext);

    return (
        <S.Container theme={theme}>


            <S.Card theme={theme}>
                <h1
                >#{id} - {name}</h1>
                <S.Img theme={theme}>
                    <img src={sprite} alt={name} />
                </S.Img>
                <S.Types style={{ background: theme.colorTypes }}>
                    {
                        types?.map((type, index) => {
                            return (
                                <S.Type style={{ background: colorTypes[type.type.name] }}
                                    theme={theme}
                                    key={index}
                                >
                                    {type.type.name}
                                </S.Type>
                            )
                        })
                    }
                </S.Types>
            </S.Card>
            <S.InfoContainer theme={theme}>
                <h2>Status</h2>
                <div>
                    <div>
                        <h4>Height</h4>
                        <p>{pokemon.details.height}</p>
                    </div>
                    <div>
                        <h4>Weight</h4>
                        <p>{pokemon.details.weight}</p>
                    </div>
                </div>
            </S.InfoContainer>

            <S.AbilitiesContainer theme={theme}>
                <div>
                    <h2>Abilities</h2>
                </div>
                <div>
                    {
                        abilities.map((ability, index) => {
                            return (
                                <li key={index} >
                                    <h4>{ability.name}</h4>
                                    {
                                        ability.effect_entries.map((effect, index) => {
                                            if (effect.language.name.includes('en')) {
                                                return (
                                                    <p key={index}>{effect.effect}</p>
                                                )
                                            }
                                        })
                                    }
                                </li>
                            )
                        })
                    }
                </div>
            </S.AbilitiesContainer>
            <S.MovesContainer theme={theme}>
                <h2>Moves</h2>
                <ul>
                    {
                        moves?.map((move, index) => {
                            return (
                                <li key={index}>{move.move.name}</li>
                            )
                        })
                    }
                </ul>
            </S.MovesContainer>

        </S.Container>
    )
}

export { PokemonDetails };