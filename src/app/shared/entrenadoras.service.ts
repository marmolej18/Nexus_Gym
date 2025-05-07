import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrenadorasService {

  /*private apiUrl = 'https://randomuser.me/api/?results=10&gender=female';

  constructor(private http: HttpClient) {}

  getEntrenadoras() {
    return this.http.get<any>(this.apiUrl).pipe(
       shareReplay(1)// caché para no hacer mil peticiones
       //asi no se llama al api cada vez que se escribe algo
    );
  }*/

    private jsonUrl = 'assets/data/entrenadoras.json';

    constructor(private http: HttpClient) {}
  
    getEntrenadoras() {
      return this.http.get<any[]>(this.jsonUrl).pipe(
        map((datos) => {
          return datos.map((entrenadora, index) => ({
            nombre: entrenadora.nombre,
            email: entrenadora.email,
            discipline_name: entrenadora.discipline_name,
            foto: `assets/img/entrenadora${index + 1}.jpg`
          }));
          
        }),
        shareReplay(1)
      );
    }
}
