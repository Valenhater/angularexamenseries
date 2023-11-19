import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { ServiceSeries } from '../../services/service.series';
import { Serie } from '../../models/serie';
import { Personaje } from '../../models/personaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevopersonaje',
  templateUrl: './nuevopersonaje.component.html',
  styleUrl: './nuevopersonaje.component.css'
})
export class NuevopersonajeComponent implements OnInit {
  public personaje!: Personaje
  public series !: Array<Serie>

  @ViewChild("cajaidserie") cajaIdSerieRef!: ElementRef;
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajaimagen") cajaImagenRef!: ElementRef;

  constructor(private _serviceSeries: ServiceSeries, private _router: Router) { }

  insertarSeries(): void {
    var idser = parseInt(this.cajaIdSerieRef.nativeElement.value);
    var nom = this.cajaNombreRef.nativeElement.value
    var img = this.cajaImagenRef.nativeElement.value
    var idper = 0
    
    var newPer = new Personaje(idper, nom, img, idser)
    this._serviceSeries.nuevoPersonaje(newPer).subscribe(response => {
      this._router.navigate(["/"]); //Con este comando volvemos a casita
    })

  }
  ngOnInit(): void {
    this._serviceSeries.getSeries().subscribe((response) => {
      this.series = response;
    })
  }

}
