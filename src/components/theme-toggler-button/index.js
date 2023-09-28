import React, { useContext } from "react";
import { ThemeContext, themes } from "../../constexts/theme-context"
import * as S from './style';


const ThemeTogglerButton = () => {
    const [{ theme}, toggleTheme] = useContext(ThemeContext);

    return (
        <S.Btn
            onClick={toggleTheme}>
            {theme === themes.light ? "🌙" : "🌞"}
        </S.Btn>
    )
}

export { ThemeTogglerButton };