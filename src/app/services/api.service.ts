import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string;
  name: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url = environment.url;
  }

  obtenerInfo(): Observable<any> {
    return this.http.get(this.url + 'all');
  }

  obtenerInfoPorNombre(name: string): Observable<any> {
    return this.http.get(this.url + 'name/' + name);
  }

  obtenerInfoPorLeng(idioma: string): Observable<any> {
    return this.http.get(this.url + 'lang/' + idioma);
  }

  obtenerInfoPorRegion(title: string): Observable<any> {
    return this.http.get(this.url + 'region/' + title);
  }
}
