import React, { useContext } from 'react'
import { ThemeContext } from '../../constexts/theme-context';
import * as S from './style';

const Button = (props) => {
    const [{theme}] = useContext(ThemeContext)
    return (
        <S.Btn theme={theme} {...props}>
            {props.children}
        </S.Btn>
    )
}

export { Button }