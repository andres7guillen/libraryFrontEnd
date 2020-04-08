import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/Components/app.component/app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { ListarLibroComponent } from './Components/listar-libro/listar-libro.component';
import { CrearLibroComponent } from './Components/crear-libro/crear-libro.component';
import { EditarLibroComponent } from './Components/editar-libro/editar-libro.component';
import { DetalleLibroComponent } from './Components/detalle-libro/detalle-libro.component';
import { ListarAutorComponent } from './Components/listar-autor/listar-autor.component';
import { CrearAutorComponent } from './Components/crear-autor/crear-autor.component';
import { EditarAutorComponent } from './Components/editar-autor/editar-autor.component';
import { DetalleAutorComponent } from './Components/detalle-autor/detalle-autor.component';
import { ListarCategoriaComponent } from './Components/listar-categoria/listar-categoria.component';
import { CrearCategoriaComponent } from './Components/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './Components/editar-categoria/editar-categoria.component';
import { DetalleCategoriaComponent } from './Components/detalle-categoria/detalle-categoria.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutorService } from './Services/autor.service';
import { FiltroLibroComponent } from './Components/filtro-libro/filtro-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ListarLibroComponent,
    CrearLibroComponent,
    EditarLibroComponent,
    DetalleLibroComponent,
    ListarAutorComponent,
    CrearAutorComponent,
    EditarAutorComponent,
    DetalleAutorComponent,
    ListarCategoriaComponent,
    CrearCategoriaComponent,
    EditarCategoriaComponent,
    DetalleCategoriaComponent,
    FiltroLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
