
class newPokemon {
    constructor(
        public readonly id:number,
        public name:string,
    ){
    }

    public scream(){
        console.log(`NO QUIERO !!!`);
    }

    
    public speak(){
        console.log(`NO QUIERO HABLAR  !`);
    }
}

const MyDecorator = () => {
    return (target:Function) => {
        return newPokemon;
    }
}

@MyDecorator()
export class Pokemon {
    constructor(
        public readonly id:number,
        public name:string,
    ){
    }


    public scream(){
        console.log(`${this.name.toLocaleUpperCase()}!!!`);
    }

    
    public speak(){
        console.log(`${this.name}, ${this.name}!`);
    }
}

export const charmander = new Pokemon(4,'Charmander');
charmander.scream();
charmander.speak();