import { AutorModel } from './AutorModel';
import { CategoriaModel } from './CategoriaModel';

interface ILibro{
    id:string;        
    nombre: string; 
    autorId: string; 
    autor:AutorModel; 
    categoriaId: string; 
    categoria: CategoriaModel;        
    isbn: string;
}

export class LibroModel implements ILibro {
    id:string;        
    nombre: string; 
    autorId: string; 
    autor:AutorModel; 
    categoriaId: string; 
    categoria: CategoriaModel;        
    isbn: string;
}