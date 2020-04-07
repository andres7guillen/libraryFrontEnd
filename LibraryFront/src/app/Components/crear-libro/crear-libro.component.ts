import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/Services/autor.service';
import { CategoriaService } from 'src/app/Services/categoria.service';
import { AutorModel } from 'src/app/Models/AutorModel';
import { CategoriaModel } from 'src/app/Models/CategoriaModel';
import { LibroModel } from 'src/app/Models/LibroModel';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { LibroService } from 'src/app/Services/libro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styles: []
})
export class CrearLibroComponent implements OnInit {
  listadoAutores : AutorModel[];
  listadoCategoria: CategoriaModel;
  libro: LibroModel = new LibroModel();

  constructor(private _autorService:AutorService,
              private _service: LibroService,
              private _categoriaService:CategoriaService,
              private router:Router) { }

  ngOnInit() {
    this.obtenerAutores();
    this.obtenerCategorias();
  }

  obtenerCategorias()
  {
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
      this._service.crear(this.libro).subscribe((data)=> {
        if(data != undefined){
          Swal.close();
          this.router.navigateByUrl('/listarLibro')
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
