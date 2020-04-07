interface IFiltro
{
    nombreLibro:string;
    categoriaId:string;
    autorId:string;   
}

export class FiltroModel implements IFiltro
{
    nombreLibro:string;
    categoriaId:string;
    autorId:string;    
}