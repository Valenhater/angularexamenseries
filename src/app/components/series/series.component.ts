import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Serie } from '../../models/serie';
import { ServiceSeries } from '../../services/service.series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent implements OnInit {

  public series !: Serie;
  public idserie !: number;

  constructor(private _serviceSeries: ServiceSeries,
    private _activeRoute: ActivatedRoute
  ) {
    this.idserie = 0;
  }
  ngOnInit(): void {
    //Conseguir el parametro de la ruta de la url
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.idserie = parametros['idserie']
      this._serviceSeries.getSerie(this.idserie).subscribe((response) => {
        this.series = response;
      })
    })
  }
}

