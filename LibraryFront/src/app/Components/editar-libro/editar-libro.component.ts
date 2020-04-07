import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LibroModel } from 'src/app/Models/LibroModel';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from 'src/app/Services/libro.service';
import { NgForm } from '@angular/forms';
import { AutorService } from 'src/app/Services/autor.service';
import { CategoriaService } from 'src/app/Services/categoria.service';
import { AutorModel } from 'src/app/Models/AutorModel';
import { CategoriaModel } from 'src/app/Models/CategoriaModel';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styles: []
})
export class EditarLibroComponent implements OnInit {
  listadoAutores : AutorModel[];
  listadoCategoria: CategoriaModel[];
  libro: LibroModel = new LibroModel();
  id:string;

  constructor(private _autorService:AutorService,
    private _service: LibroService,
    private _categoriaService:CategoriaService,
    private route: ActivatedRoute,
    private router:Router) { }

              ngOnInit() {
                this.obtenerAutores();
                this.obtenerCategorias();
                this.obtenerPorGuid();
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

  obtenerPorGuid(){
    this.id = this.route.snapshot.paramMap.get('id');
    this._service.obtenerPorGuid(this.id).subscribe((data) => {
      if(data != undefined){
        Swal.close();
        this.libro = data;
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
      this._service.actualizar(this.libro).subscribe((data)=> {
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
