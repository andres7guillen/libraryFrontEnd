import { Component, OnInit } from '@angular/core';
import { AutorModel } from 'src/app/Models/AutorModel';
import { NgForm } from '@angular/forms';
import { AutorService } from 'src/app/Services/autor.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-autor',
  templateUrl: './crear-autor.component.html',
  styles: []
})
export class CrearAutorComponent implements OnInit {
  autor:AutorModel = new AutorModel();

  constructor(private service:AutorService,
              private router:Router) { }

  ngOnInit(){
  }

  guardar(g:NgForm)
  {
    Swal.fire({
      title:'Cargando',
      text: 'Guardando información',
      allowOutsideClick: false
    });
    Swal.showLoading();
    if(g.valid)
    {      
      this.service.crear(this.autor).subscribe((data)=> {
        if(data != undefined){
          Swal.close();
          this.router.navigateByUrl('/listarAutor')
        }else{
          Swal.close();
        }
      },(error) => {
        Swal.fire({
          title:'Error',
          text: error.error,
          allowOutsideClick: false
        });
      });
    }
  }

}
