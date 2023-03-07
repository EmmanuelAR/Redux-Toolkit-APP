import { setPokemons, startLoadingPokemons } from "./PokemonSlice";

//  Funcion que retorna el llamado de otra
//  funcion asyncrona.

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
    // hacer llamado http
    const resp = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    );

    const data = await resp.json();
    console.log(data);

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
