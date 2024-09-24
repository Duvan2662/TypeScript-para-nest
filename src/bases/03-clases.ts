export class Pokemon {
    public id :number;
    public name : string;

    constructor(id:number,name:string){
        this.id = id;
        this.name= name;
        console.log('Llamado al constructor');
    }

    
    
    
    
}

export const charmander = new Pokemon(1,'charmander');
// charmander.id = 3;
// charmander.name = 'alura'