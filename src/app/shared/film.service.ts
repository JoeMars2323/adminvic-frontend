import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Film } from '../restrict/models/film';

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:9000/adminvic-admin-api/v1/';
  }

  // rest functions
  public getFilmById(id: number): Observable<Film> {
    let params = new HttpParams().set('id', id.toString());
    return this.http.get<Film>(this.url + 'films/film/' + id);
  }

  public getAllFilms(): Observable<Film[]> {
     return this.http.get<Film[]>(this.url + 'films');
   }

  public createFilm(film: Film): Observable<boolean> {
    return this.http.post<boolean>(this.url + 'films/', film);
  }

  public updateFilm(film: Film): Observable<boolean> {
    return this.http.put<boolean>(this.url + 'films/', film);
  }

  public deleteFilm(id: number): Observable<boolean> {
    let params = new HttpParams().set('id', id.toString());
    return this.http.patch<boolean>(this.url + 'films/film/', { params: params });
  }

  public deleteFilmPhysically(id: number): Observable<boolean> {
    let params = new HttpParams().set('id', id.toString());
    return this.http.delete<boolean>(this.url + 'films/film/', { params: params });
  }

}