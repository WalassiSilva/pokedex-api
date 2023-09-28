import React, { useContext } from 'react'
import * as S from './style';
import { ThemeContext } from '../../constexts/theme-context';

const Button = (props) => {
    const [{theme}] = useContext(ThemeContext)
    return (
        <S.Btn theme={theme} {...props}>
            {props.children}
        </S.Btn>
    )
}

export { Button }