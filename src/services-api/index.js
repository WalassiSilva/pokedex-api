import { baseUrl } from "../variables"

async function getPokemon(pokemon) {

    try {
        const response = await fetch(`${baseUrl}${pokemon}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error: ', error)
    }

}

async function getPokemonList(limit, offset) {
    try {
        const response = await fetch(`${baseUrl}?limit=${limit}&offset=${offset}`);
        console.log(offset);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log('Error: ', error)
    }
}

async function getPokemonAbility(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/ability/${pokemon}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error: ', error)
    }

}

export { getPokemon, getPokemonList, getPokemonAbility };