import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProvider } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { HomeComponent } from './components/home/home.component';
import { SeriesComponent } from './components/series/series.component';
import { MenuComponent } from './components/menu/menu.component';
import { NuevopersonajeComponent } from './components/nuevopersonaje/nuevopersonaje.component';
import { ModificarComponent } from './components/modificar/modificar.component';

import { ServiceSeries } from './services/service.series';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    HomeComponent,
    SeriesComponent,
    MenuComponent,
    NuevopersonajeComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProvider,ServiceSeries],
  bootstrap: [AppComponent]
})
export class AppModule { }
