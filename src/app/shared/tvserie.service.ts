import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Tvserie } from '../restrict/models/tvserie';

@Injectable({
  providedIn: 'root'
})

export class TvserieService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:9000/adminvic-admin-api/v1/';
  }

  // rest functions
  public getTvserieById(id: number): Observable<Tvserie> {
    let params = new HttpParams().set('id', id.toString());
    return this.http.get<Tvserie>(this.url + 'tvseries/tvserie/' + id);
  }

   public getAllTvseries(): Observable<Tvserie[]> {
     return this.http.get<Tvserie[]>(this.url + 'tvseries');
   }

   public createTvserie(tvserie: Tvserie): Observable<boolean> {
    return this.http.post<boolean>(this.url + 'tvseries/', tvserie);
  }

  public updateTvserie(tvserie: Tvserie): Observable<boolean> {
    return this.http.put<boolean>(this.url + 'tvseries/', tvserie);
  }

  public deleteTvserie(id: number): Observable<boolean> {
    let params = new HttpParams().set('id', id.toString());
    return this.http.patch<boolean>(this.url + 'tvseries/tvserie', { params: params });
  }

  public deleteTvseriePhysically(id: number): Observable<boolean> {
    let params = new HttpParams().set('id', id.toString());
    return this.http.delete<boolean>(this.url + 'tvseries/tvserie', { params: params });
  }

}
