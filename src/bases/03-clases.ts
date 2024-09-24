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
    
}

export const charmander = new Pokemon(1,'charmander','https://pokemon.com/4');
// charmander.id = 3;
// charmander.name = 'alura'

charmander.scream();
charmander.speak();