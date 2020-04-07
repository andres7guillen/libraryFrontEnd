import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CategoriaModel } from 'src/app/Models/CategoriaModel';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/Services/categoria.service';

@Component({
  selector: 'app-detalle-categoria',
  templateUrl: './detalle-categoria.component.html',
  styles: []
})
export class DetalleCategoriaComponent implements OnInit {

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

}
