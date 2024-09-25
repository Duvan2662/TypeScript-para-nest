import { Move, PokeAPIResponse,} from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly http:HttpAdapter,
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        // const {data} = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4');
        const  data  = await this.http.getRequest<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4');
    
        
        console.log( data.moves );
        
        return data.moves;
    }

}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFectch = new PokeApiFetchAdapter();


export const charmander = new Pokemon( 4, 'Charmander', pokeApiFectch);

charmander.getMoves();