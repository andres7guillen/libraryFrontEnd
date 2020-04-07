import { Component, OnInit } from '@angular/core';
import { FiltroModel } from 'src/app/Models/filtroModel';
import Swal from 'sweetalert2';
import { CategoriaService } from 'src/app/Services/categoria.service';
import { AutorService } from 'src/app/Services/autor.service';
import { AutorModel } from 'src/app/Models/AutorModel';
import { CategoriaModel } from 'src/app/Models/CategoriaModel';
import { LibroModel } from 'src/app/Models/LibroModel';
import { NgForm } from '@angular/forms';
import { LibroService } from 'src/app/Services/libro.service';

@Component({
  selector: 'app-filtro-libro',
  templateUrl: './filtro-libro.component.html',
  styles: []
})
export class FiltroLibroComponent implements OnInit {
  filtro:FiltroModel = new FiltroModel();
  listadoAutores : AutorModel[];
  listadoCategoria: CategoriaModel[];
  listado:LibroModel[];

  constructor(private _categoriaService:CategoriaService,
              private _autorService: AutorService,
              private _service:LibroService) { }

  ngOnInit() {
    this.obtenerAutores();
    this.obtenerCategorias();
  }

  obtenerCategorias(){
                this._categoriaService.obtenerTodos().subscribe((data)=> {
                  if(data != undefined){
                    this.listadoCategoria = data;
                  }
                },(error)=>{
                  Swal.close();
                  Swal.fire({
                    title:'Error',
                    text: error.error,
                    allowOutsideClick: false
                  });
                });
              }

              filtrar(f:NgForm)
              {
                  this._service.obtenerPorFiltro(this.filtro).subscribe((data)=>{
                    if(data != undefined)
                    {
                      this.listado = data;
                    }
                  },(error)=>{
                    Swal.fire({
                      title:'Error',
                      text: error.error,
                      allowOutsideClick: false
                    });
                  })

              }


              borrarLibro(libro:LibroModel, index:number){
                Swal.fire({
                  title: 'Esta seguro?',
                  text: 'Esta seguro que desea eliminar a: ' + libro.nombre + ' ' + '?',
                  showCancelButton:true,
                  showConfirmButton: true,
                  allowOutsideClick: false
                }).then(resp => {
                  if(resp.value){
                    this._service.eliminar(libro.id).subscribe(data => {
                      if(data != undefined){
                        this._service.obtenerPorFiltro(this.filtro).subscribe((data)=>{
                          if(data !== null || data !== undefined){
                            this.listado = data;
                          }
                        },(error) => {
                          Swal.fire({
                            title:'Info',
                            text: error.error,
                            allowOutsideClick: false
                          })
                        })
            
                        Swal.fire({
                          title: 'Correcto',
                          text: 'Libro:  ' + libro.nombre + ' borrado correctamente',
                          allowOutsideClick: false
                        });
                        
                      }
                    },(error) => {
                      
                    })
                  }
                })
              }

              borrarFiltro()
              {
                this.filtro = new FiltroModel();
              }
            
              obtenerAutores()
              {
                this._autorService.obtenerTodos().subscribe((data)=> {
                  if(data != undefined){
                    this.listadoAutores = data;
                  }
                },(error)=>{
                  Swal.close();
                  Swal.fire({
                    title:'Error',
                    text: error.error,
                    allowOutsideClick: false
                  });
                });
              }

}
