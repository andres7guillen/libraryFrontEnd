import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { FiltroLibroComponent } from './Components/filtro-libro/filtro-libro.component';


const routes: Routes = [
  { path:'Home',component: HomeComponent },
  //LIBRO
  { path:'listarLibro', component: ListarLibroComponent},
  { path:'crearLibro', component: CrearLibroComponent },
  { path:'editarLibro/:id', component: EditarLibroComponent },
  { path:'detalleLibro/:id', component: DetalleLibroComponent },
  { path:'filtrarLibro' , component: FiltroLibroComponent },

  //AUTOR
  { path:'listarAutor', component: ListarAutorComponent},
  { path:'crearAutor', component: CrearAutorComponent },
  { path:'editarAutor/:id', component: EditarAutorComponent },
  { path:'detalleAutor/:id', component: DetalleAutorComponent },

  //CATEGORIA
  { path:'listarCategoria', component: ListarCategoriaComponent },
  { path:'crearCategoria', component: CrearCategoriaComponent },
  { path: 'editarCategoria/:id', component: EditarCategoriaComponent},
  { path: 'detalleCategoria/:id', component: DetalleCategoriaComponent},

  { path: '**', redirectTo: 'Home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
