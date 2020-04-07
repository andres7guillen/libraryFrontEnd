import { Component, OnInit } from '@angular/core';
import { AutorModel } from 'src/app/Models/AutorModel';
import { ActivatedRoute, Router } from '@angular/router';
import { AutorService } from 'src/app/Services/autor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-autor',
  templateUrl: './detalle-autor.component.html',
  styles: []
})
export class DetalleAutorComponent implements OnInit {
  autor:AutorModel = new AutorModel();
  id:string;

  constructor(private service:AutorService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    Swal.fire({
      title:'Cargando',
      text: 'Consultando información',
      allowOutsideClick: false
    });
    Swal.showLoading();
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

}
