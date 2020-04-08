import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LibroModel } from 'src/app/Models/LibroModel';
import { LibroService } from 'src/app/Services/libro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-libro',
  templateUrl: './listar-libro.component.html',
  styles: []
})
export class ListarLibroComponent implements OnInit {

  listado:LibroModel[];
  p: number = 1;  
  cantidadPorPagina:number = 10;
  total:number;

  constructor(private service:LibroService,
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
        this.service.eliminar(libro.id).subscribe(data => {
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
              text: 'Libro:  ' + libro.nombre + ' borrado correctamente',
              allowOutsideClick: false
            });
            
          }
        },(error) => {
          
        })
      }
    })
  }

}
