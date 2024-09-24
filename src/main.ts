import './style.css'
import { setupCounter } from './counter.ts'
import { charmander } from './bases/03-clases.ts'
// import { name, age } from "./bases/01-types.ts";
// import { charmander, pokemonIds, pokemons } from './bases/02-objects.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>${charmander}</h1>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
