import React, { useEffect } from 'react';
import { proxy, useSnapshot } from 'valtio';
import axios, { AxiosError } from 'axios';
import {state} from "../store"

const fetchPokemons = async () => {
  state.loading = true;
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    state.pokemons = response.data.results;
  } catch (error: AxiosError | Error | any) {
    state.error = error.message;
  } finally {
    state.loading = false;
  }
};

const PokemonList = () => {
  const { pokemons, loading, error, lotion } = useSnapshot(state);

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (<>
    <h1>Lotion: {lotion}</h1>
    <ul>
      {pokemons.map(pokemon => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
    </>);
};

export default PokemonList;
