import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ThemeTogglerButton } from '../theme-toggler-button';
import logo from '../../assets/logo.png'
import pokeball from '../../assets/pokeball.png'
import * as S from './style'


const Header = ({ clearPage }) => {
  return (
    <S.Header>
      <img src={pokeball} alt='Pokeball' />
      <Link onClick={clearPage} to={'/'} alt='Logo'>
        <img src={logo} alt='logo' title='Voltar' />
      </Link>
      <ThemeTogglerButton />
    </S.Header>
  )
}
export { Header };
