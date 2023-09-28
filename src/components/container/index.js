import React, { useContext } from "react";
import { ThemeContext } from "../../constexts/theme-context";
import * as S from './style';

const Container = (props) => {

    const [{ theme }] = useContext(ThemeContext);
    return (
        <S.Container theme={theme}>
            {props.children}
        </S.Container>
    )
}
export { Container } 