import { Component, OnInit } from '@angular/core';
import { AutorModel } from 'src/app/Models/AutorModel';
import { AutorService } from 'src/app/Services/autor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-autor',
  templateUrl: './listar-autor.component.html',
  styles: []
})
export class ListarAutorComponent implements OnInit {

  listado:AutorModel[];

  constructor(private service:AutorService,
              private route:Router) { }

  ngOnInit() {
    this.obtenerTodos();  
  }

  obtenerTodos(){
    this.service.obtenerTodos().subscribe((data)=>{
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

  borrarAutor(autor:AutorModel, index:number){
    Swal.fire({
      title: 'Esta seguro?',
      text: 'Esta seguro que desea eliminar a: ' + autor.nombre + ' ' + autor.apellidos + '?',
      showCancelButton:true,
      showConfirmButton: true,
      allowOutsideClick: false
    }).then(resp => {
      if(resp.value){
        this.service.eliminar(autor.id).subscribe(data => {
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
              text: 'Autor:  ' + autor.nombre + ' borrado correctamente',
              allowOutsideClick: false
            });
            
          }
        },(error) => {
          
        })
      }
    })
  }

}
