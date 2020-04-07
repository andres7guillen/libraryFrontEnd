import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CategoriaModel } from 'src/app/Models/CategoriaModel';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/Services/categoria.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styles: []
})
export class EditarCategoriaComponent implements OnInit {
  categoria:CategoriaModel = new CategoriaModel();
  id:string;

  constructor(private route:ActivatedRoute,
              private service:CategoriaService,
              private router:Router) { }

  ngOnInit() {
    this.obtenerPorGuid();
  }

  obtenerPorGuid(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.obtenerPorGuid(this.id).subscribe((data) => {
      if(data != undefined){
        Swal.close();
        this.categoria = data;
      }
    },(error)=> {});
  }

  editar(g:NgForm)
  {
    Swal.fire({
      title:'Cargando',
      text: 'Guardando información',
      allowOutsideClick: false
    });
    Swal.showLoading();
    if(g.valid)
    {      
      this.service.actualizar(this.categoria).subscribe((data)=> {
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
