export class Theme {
    nombre: string;
    description: string;
    id: number;
    nivel: number;
    constructor(nombre:string, description:string, id:number, nivel:number) { 
        this.nombre = nombre;
        this.description = description;
        this.id = id;
        this.nivel = nivel;
    }
}
