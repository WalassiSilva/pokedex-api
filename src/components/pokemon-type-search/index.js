import React, { useContext } from 'react'
import { ThemeContext } from '../../constexts/theme-context';
import * as S from './style'

const PokemonTypeSearch = ({ children, type, setType, ...rest }) => {
const [{theme}] = useContext(ThemeContext);

    return (
        <div>
            <S.Select theme={theme} {...rest}
                value={type}
                onChange={e => setType(e.target.value)}
            >
                {children}
            </S.Select>
        </div>
    )
}

export { PokemonTypeSearch };