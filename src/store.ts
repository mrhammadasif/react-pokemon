import {proxy} from "valtio"
import {devtools} from "valtio/utils"
export const state = proxy({
  pokemons: [] as {name: string}[],
  lotion: '',
  loading: false,
  error: null,
});
devtools(state, {name: 'state', enabled: true});