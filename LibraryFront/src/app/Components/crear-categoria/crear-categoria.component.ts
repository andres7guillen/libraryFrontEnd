import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CategoriaModel } from 'src/app/Models/CategoriaModel';
import { CategoriaService } from 'src/app/Services/categoria.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styles: []
})
export class CrearCategoriaComponent implements OnInit {
  categoria:CategoriaModel = new CategoriaModel();

  constructor(private service:CategoriaService,
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
      this.service.crear(this.categoria).subscribe((data)=> {
        if(data != undefined){
          Swal.close();
          this.router.navigateByUrl('/listarCategoria')
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
