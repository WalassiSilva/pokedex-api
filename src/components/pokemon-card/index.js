import React, { useContext } from 'react'
import { ThemeContext } from '../../constexts/theme-context';
import * as S from './style';

const PokemonCard = ({ id, name, sprite, types }) => {
    const [{ theme, colorTypes }] = useContext(ThemeContext);
    return (
        <S.Card
            theme={theme}>
            <h4># {id} {name}</h4>
            <S.Img theme={theme} >
                <img src={sprite} alt={name} />
            </S.Img>
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