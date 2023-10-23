import React, { createContext, useEffect, useState } from "react";
import bg1 from '../../assets/bg1.jpg';
import bg2 from '../../assets/bg2.jpg';
import bgm1 from '../../assets/bgm1.jpg'
import bgm2 from '../../assets/bgm2.jpg'
import pokeball from '../../assets/pokeball.png'

export const themes = {
    light: {
        color: '#333',
        bgColor: '#fff',
        bgImage: bg1,
        position:'center right no-repeat',
        bgImageSmall:bgm1,
        positionSmall: 'center center no-repeat',
        cardColor: '#d8e3ecd0',
        hoverColor: '#86b6b4dd',
        pokeball: pokeball
       
    },
    dark: {
        color: '#fff',
        bgColor: '#333',
        bgImage: bg2,
        position:'center center no-repeat',
        bgImageSmall:bgm2,
        positionSmall: 'center top no-repeat ',
        cardColor: '#a8a8a8d0',
        hoverColor: '#86b6b4dd',
        pokeball: pokeball            
    },
}

export const colorTypes = {
    bug: '#729f3f',
    dark: '#707070',
    dragon: 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)',
    electric: '#eed535',
    fairy: '#fdb9e9',
    fighting: '#d56723',
    fire: '#fd7d24',
    flying: 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)',
    ghost: '#7b62a3',
    grass: '#9bcc50',
    ground: 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)',
    ice: '#51c4e7',
    normal: '#a4acaf',
    poison: '#b97fc9',
    psychic: '#f366b9',
    rock: '#a38c21',
    steel: '#9eb7b8',
    water: '#4592c4',
}

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(false);
    const theme = isDark ? themes.dark : themes.light;
    const toggleTheme = () => {
        localStorage.setItem('isDark', JSON.stringify(!isDark));
        setIsDark(!isDark);
    }
    useEffect(() => {
        const isDark = localStorage.getItem('isDark') === 'true';
        setIsDark(isDark);
    }, []);

    return (
        <ThemeContext.Provider
            theme={[{ theme, isDark, colorTypes }, toggleTheme]}
            value={[{ theme, isDark, colorTypes }, toggleTheme]} 
            >
            {children}
        </ThemeContext.Provider>

    )
}