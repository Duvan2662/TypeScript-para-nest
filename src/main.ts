import './style.css'
import { setupCounter } from './counter.ts'
// import { name, age } from "./bases/01-types.ts";
import { charmander, pokemonIds, pokemons } from './bases/02-objects.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${pokemons.toString()}</h1>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
