import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from 'src/app/Models/CategoriaModel';
import { CategoriaService } from 'src/app/Services/categoria.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styles: []
})
export class ListarCategoriaComponent implements OnInit {
  listado:CategoriaModel[];
  p: number = 1;  
  cantidadPorPagina:number = 10;
  total:number;

  constructor(private service:CategoriaService,
              private route:Router) { }

  ngOnInit() {
    this.obtenerTodos();  
  }

  obtenerTodos(){
    this.service.obtenerTodos().subscribe((data)=>{
      if(data != undefined)
      {
        this.total = data.length;
        this.listado = data;
      }
    },(error)=>{
      Swal.close();
      Swal.fire({
        title:'Error',
        text: error.error,
        allowOutsideClick: false
      });
    })
  }

  borrarCategoria(categoria:CategoriaModel, index:number){
    Swal.fire({
      title: 'Esta seguro?',
      text: 'Esta seguro que desea eliminar a: ' + categoria.nombre + ' ?',
      showCancelButton:true,
      showConfirmButton: true,
      allowOutsideClick: false
    }).then(resp => {
      if(resp.value){
        this.service.eliminar(categoria.id).subscribe(data => {
          if(data != undefined){
            this.service.obtenerTodos().subscribe((data)=>{
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
              text: 'Categoria:  ' + categoria.nombre + ' borrada correctamente',
              allowOutsideClick: false
            });
            
          }
        },(error) => {
          
        })
      }
    })
  }
}
