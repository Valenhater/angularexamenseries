import { HomeComponent } from './components/home/home.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { NuevopersonajeComponent } from './components/nuevopersonaje/nuevopersonaje.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { SeriesComponent } from './components/series/series.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'insertar', component: NuevopersonajeComponent },
    { path: 'modificar', component: ModificarComponent },
    { path: 'serie/:idserie', component: SeriesComponent },
    { path: 'personajes/:idserie', component: PersonajesComponent },
   
  ];
  
  export const appRoutingProvider: any[] = [];
  export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);