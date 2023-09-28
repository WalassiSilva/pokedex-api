import { PokemonSearch } from "../pokemon-search";
import { PokemonTypeSearch } from "../pokemon-type-search";
import * as S from './style'

const pokemonsType = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];

const SearchBar = ({ inputValue, setInputValue, type, setType }) => {

    

    return (
        <S.SearchBar>
            <PokemonSearch
                inputValue={inputValue} setInputValue={setInputValue}
                placeholder='Pesquisar Pokemon' />

            <PokemonTypeSearch
                type={type} setType={setType}>
                <option value=''>Tipo</option>
                {
                    pokemonsType.map((type, index) => {
                        return (
                            <option key={index} value={type}>{type}</option>
                        )
                    })
                }
            </PokemonTypeSearch>

        </S.SearchBar>
    )
}

export { SearchBar };