import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CategoriaModel } from '../Models/CategoriaModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private url: string = 'https://localhost:44339/api/Categoria/';
  private headers = new HttpHeaders({
    'Content-type': 'application/json'
  });
  constructor(private http:HttpClient) { }

crear(Categoria:CategoriaModel)
{
  return this.http.post(this.url + 'Crear' ,JSON.stringify(Categoria),{headers: this.headers});
}

obtenerTodos():Observable<any>
{
  return this.http.get(this.url + 'ObtenerTodos');
}

obtenerPorGuid(id:string):Observable<any>
{
  return this.http.get(this.url + 'ObtenerPorGuid?Id=' + id);
}

actualizar(Categoria:CategoriaModel):Observable<any>
{
  return this.http.put(this.url + 'Actualizar' , JSON.stringify(Categoria),{headers: this.headers});  
}

eliminar(id:string):Observable<any>
{
  return this.http.delete(this.url + 'Eliminar?Id=' + id );
}
}
