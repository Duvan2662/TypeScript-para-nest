import './style.css'
import { charmander } from './bases/03-clases.ts'
// import { name, age } from "./bases/01-types.ts";
// import { charmander, pokemonIds, pokemons } from './bases/02-objects.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${charmander.getname}</h1>
`


