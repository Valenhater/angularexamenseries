import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Personaje } from '../../models/personaje';
import { ServiceSeries } from '../../services/service.series';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent implements OnInit {
  public idserie !: number;
  public personajes!: Array<Personaje>

  constructor(private _serviceSeries: ServiceSeries,
    private _activeRoute: ActivatedRoute) {
    this.idserie = 0
  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.idserie = parseInt(parametros['idserie'])
      this._serviceSeries.getPersonajes(this.idserie).subscribe((response) => {
        this.personajes = response;
      })
    })
  }

}
