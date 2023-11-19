import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Personaje } from '../models/personaje';

//IMPORTANTE: IMPORTAR EL SERVICIO EN EL MODULE EN PROVIDERS

@Injectable()
export class ServiceSeries {
    constructor(private _http: HttpClient) { }
    getSeries(): Observable<any> {
        var request = 'api/series';
        var url = environment.apiCrudSeries + request;
        return this._http.get(url);
    }
    getSerie(idserie: number): Observable<any> {
        var request = "api/series/" + idserie
        var url = environment.apiCrudSeries + request

        return this._http.get(url)
    }
    getPersonajes(idserie: number): Observable<any> {
        var request = "api/Series/PersonajesSerie/" + idserie
        var url = environment.apiCrudSeries + request;

        return this._http.get(url);
    }
    findPersonaje(idpersonaje:number): Observable<any> {
        var request ="api/Personajes/" +idpersonaje
        var url = environment.apiCrudSeries + request

        return this._http.get(url);
    }
    getPersonajesMod(): Observable<any> {
        var request = "/api/Personajes" 
        var url = environment.apiCrudSeries + request;

        return this._http.get(url);
    }
    nuevoPersonaje(personaje: Personaje): Observable<any> {
        //Debemos convertir el objeto class departamento a json
        var json = JSON.stringify(personaje);
        //Vamos a enviar un objeto json por lo que debemos indicar en la peticion el formato de dicho objeto. lo realizamos con headers
        var header = new HttpHeaders();
        header = header.set('content-type', 'application/json');
        var request = 'api/personajes';
        var url = environment.apiCrudSeries + request;
        return this._http.post(url, json, { headers: header });
    }
    modificarPersonaje(idserie:number, idpersonaje:number):Observable<any> {
        var request ="api/Personajes/"+idpersonaje+"/"+idserie
        var url = environment.apiCrudSeries + request

        return this._http.put(url,{});
    }
    borrarPersonaje(idpersonaje:string):Observable<any>{
        var request ="api/personajes/" +idpersonaje
        var url = environment.apiCrudSeries + request

        return this._http.delete(url);
    }
}
