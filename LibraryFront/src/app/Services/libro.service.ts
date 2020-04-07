import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LibroModel } from '../Models/LibroModel';
import { Observable } from 'rxjs';
import { FiltroModel } from '../Models/filtroModel';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private url: string = 'https://localhost:44339/api/Libro/';
  private headers = new HttpHeaders({
    'Content-type': 'application/json'
  });
  constructor(private http:HttpClient) { }

crear(Libro:LibroModel)
{
  return this.http.post(this.url + 'Crear' ,JSON.stringify(Libro),{headers: this.headers});
}

obtenerTodos():Observable<any>
{
  return this.http.get(this.url + 'ObtenerTodos');
}

obtenerPorFiltro(filtro:FiltroModel):Observable<any>
{
    return this.http.post(this.url + 'ObenerPorFiltro',JSON.stringify(filtro),{headers: this.headers});
}

obtenerPorGuid(id:string):Observable<any>
{
  return this.http.get(this.url + 'ObtenerPorGuid?Id=' + id);
}

actualizar(Libro:LibroModel):Observable<any>
{
  return this.http.put(this.url + 'Actualizar' , JSON.stringify(Libro),{headers: this.headers});  
}

eliminar(id:string):Observable<any>
{
  return this.http.delete(this.url + 'Eliminar?Id=' + id );
}
}
