import { Component, OnInit } from '@angular/core';
import { LibroModel } from 'src/app/Models/LibroModel';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from 'src/app/Services/libro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styles: []
})
export class DetalleLibroComponent implements OnInit {
  libro:LibroModel = new LibroModel();
  id:string;

  constructor(private route:ActivatedRoute,
              private service:LibroService,
              private router:Router) { }

  ngOnInit() {
    this.obtenerPorGuid();
  }

  obtenerPorGuid(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.obtenerPorGuid(this.id).subscribe((data) => {
      if(data != undefined){
        Swal.close();
        this.libro = data;
      }
    },(error)=> {});
  }
  
}
