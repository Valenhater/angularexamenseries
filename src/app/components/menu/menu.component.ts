import { Component, OnInit } from '@angular/core';

import { ServiceSeries } from '../../services/service.series';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  public series!: Array<Serie>
  constructor(private _serviceSeries: ServiceSeries) { }


  ngOnInit(): void {
    this._serviceSeries.getSeries().subscribe((response) => {
      this.series = response
    })
  }
}
