import { LibroModel } from "./LibroModel";

interface IAutor{
    id:string;        
    nombre: string; 
    apellidos: string;
    fechaNacimiento: Date;
    libros:LibroModel[] 
}

export class AutorModel implements IAutor {
    id:string;        
    nombre: string; 
    apellidos: string;
    fechaNacimiento: Date;
    libros:LibroModel[] 
}