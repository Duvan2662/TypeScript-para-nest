export let name :string = "David";
export const age : number = 35;
export const isValid : boolean = true;

name = 'melissa';
// name = true;
// name = 123;


export const templateString = `
    Esto es un String multilinea
    que puede tener 
    " doble
    ' simple
    inyectar valores: ${name}
    expresiones: ${1+1}
    numeros: ${age}
    boleanos: ${isValid}
    `;

console.log(templateString);
