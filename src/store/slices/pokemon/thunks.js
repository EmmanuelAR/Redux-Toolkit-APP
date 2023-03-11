import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./PokemonSlice";

//  Funcion que retorna el llamado de otra
//  funcion asyncrona.

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
