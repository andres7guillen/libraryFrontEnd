import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutorService } from 'src/app/Services/autor.service';
import { AutorModel } from 'src/app/Models/AutorModel';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-autor',
  templateUrl: './editar-autor.component.html',
  styles: []
})
export class EditarAutorComponent implements OnInit {
  autor:AutorModel = new AutorModel();
  id:string;

  constructor(private route:ActivatedRoute,
              private service:AutorService,
              private router:Router) { }

  ngOnInit() {
    this.obtenerPorGuid();
  }

  obtenerPorGuid(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.obtenerPorGuid(this.id).subscribe((data) => {
      if(data != undefined){
        Swal.close();
        this.autor = data;
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
      this.service.actualizar(this.autor).subscribe((data)=> {
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
