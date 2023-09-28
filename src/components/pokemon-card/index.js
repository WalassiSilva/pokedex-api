import React, { useContext } from 'react'
import * as S from './style';
import { ThemeContext } from '../../constexts/theme-context';

const PokemonCard = ({ id, name, sprite, types }) => {
    const [{ theme, colorTypes }] = useContext(ThemeContext);
    return (
        <S.Card
            theme={theme}>
            <h4># {id} {name}</h4>
            <img src={sprite} alt={name} />
            <S.Types>
                {
                    types.map((type, index) => {
                        return (
                            <S.Type theme={theme}
                                key={index}
                                style={{ background: colorTypes[type.type.name] }}>
                                {type.type.name}
                            </S.Type >
                        )
                    })
                }
            </S.Types>
        </S.Card>
    )
}

export { PokemonCard };