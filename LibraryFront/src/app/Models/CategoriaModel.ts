import { LibroModel } from "./LibroModel";

interface ICategoria{
    id: string;    
    nombre: string;    
    descripcion: string;
    libros:LibroModel[]; 
}

export class CategoriaModel implements ICategoria {
    id: string;    
    nombre: string;    
    descripcion: string;
    libros:LibroModel[];
}