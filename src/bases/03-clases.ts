import axios from "axios";
import { Move, PokeAPIResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
    public id :number;
    public name : string;
    public imagenurl:string;


    constructor(id:number,name:string, url:string){
        this.id = id;
        this.name = name;
        this.imagenurl = url;
        console.log('Llamado al constructor');
    }

    
    public get getname() : string {
        return this.name
    }

    
    public set setname(value : string) {
        this.name= value;
    }
    
    
    public scream() {
        console.log(`
            ${this.name.toUpperCase()} !!!
            `);
    }

    
    public speak() {
        console.log(`${this.name} , ${this.name}`);
    }

    public async getmoves(): Promise <Move[]>{
        // const moves = 0;
        const {data} = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);

        return data.moves;
    }
    
}

export const charmander = new Pokemon(1,'charmander','https://pokemon.com/4');
// charmander.id = 3;
// charmander.name = 'alura'

// charmander.scream();
// charmander.speak();

// console.log(charmander.getmoves());

charmander.getmoves();