import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AutorModel } from '../Models/AutorModel';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  private url: string = 'https://localhost:44339/api/Autor/';
  private headers = new HttpHeaders({
    'Content-type': 'application/json'
  });
  constructor(private http:HttpClient) { }

crear(autor:AutorModel)
{
  return this.http.post(this.url + 'Crear' ,JSON.stringify(autor),{headers: this.headers});
}

obtenerTodos():Observable<any>
{
  return this.http.get(this.url + 'ObtenerTodos');
}

obtenerPorGuid(id:string):Observable<any>
{
  return this.http.get(this.url + 'ObtenerPorGuid?Id=' + id);
}

actualizar(autor:AutorModel):Observable<any>
{
  return this.http.put(this.url + 'Actualizar' , JSON.stringify(autor),{headers: this.headers});  
}

eliminar(id:string):Observable<any>
{
  return this.http.delete(this.url + 'Eliminar?Id=' + id );
}


}
