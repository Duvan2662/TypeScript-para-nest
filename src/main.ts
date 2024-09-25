import { charmander } from './bases/06-decorators2'
import './style.css'
// import { charmander } from './bases/03-clases.ts'
// import { name, age } from "./bases/01-types.ts";
// import { charmander, pokemonIds, pokemons } from './bases/02-objects.ts'
// import { charmander } from './bases/04-injection.ts'
// import { charmander } from './bases/05-decorators'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${charmander.name}</h1>
`


