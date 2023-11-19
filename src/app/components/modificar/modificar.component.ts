import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ServiceSeries } from '../../services/service.series';
import { Serie } from '../../models/serie';
import { Personaje } from '../../models/personaje';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css'
})
export class ModificarComponent implements OnInit {
  public personaje!: Personaje
  public series !: Array<Serie>
  public personajes !: Array<Personaje>

  @ViewChild("cajaidserie") cajaIdSerieRef!: ElementRef;
  @ViewChild("cajaidpersonaje") cajaIdPersonajeRef!: ElementRef;

  constructor(private _serviceSeries: ServiceSeries, private _router: Router) { }

  modificarPersonaje(): void {
    var idser = parseInt(this.cajaIdSerieRef.nativeElement.value);
    var idper = parseInt(this.cajaIdPersonajeRef.nativeElement.value);

    this._serviceSeries.modificarPersonaje(idser, idper).subscribe(response => {
      this._router.navigate(["/"]);
    })
  }
  ngOnInit(): void {
    this._serviceSeries.getSeries().subscribe((response) => {
      this.series = response;
    })
    this._serviceSeries.getPersonajesMod().subscribe((response) => {
      this.personajes = response;
    })

  }
}
