export const pokemonIds = [1,20,30,34,66];



export interface Pokemon {
    id:number;
    name:string;
    age?:number //Vlor opcional ?
}

export const charmander:Pokemon = {
    id:1,
    name: 'Charmander',
}

export const bolbasaur:Pokemon = {
    id: 2,
    name: "Bolbasaur",
    age:1,

      
}


export const pokemons:Pokemon[] = [];

pokemons.push(charmander,bolbasaur);
console.log(pokemons);


