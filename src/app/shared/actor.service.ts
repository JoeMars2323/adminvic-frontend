import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Actor } from 'src/app/restrict/models/actor';

@Injectable({
  providedIn: 'root'
})

export class ActorService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:9000/adminvic-admin-api/v1/';
  }

  // rest functions
  public getActorById(id: number): Observable<Actor> {
    return this.http.get<Actor>(this.url + 'actors/actor/' + id);
  }

   public getAllActors(): Observable<Actor[]> {
     return this.http.get<Actor[]>(this.url + 'actors');
   }

   public createActor(actor: Actor): Observable<boolean> {
    return this.http.post<boolean>(this.url + 'actors/', actor);
  }

  public updateActor(actor: Actor): Observable<boolean> {
    return this.http.put<boolean>(this.url + 'actors/', actor);
  }

  public deleteActor(id: number): Observable<boolean> {
    let params = new HttpParams().set('id', id.toString());
    console.log(params);
    return this.http.patch<boolean>(this.url + 'actors/actor/', { params: params });
  }

}
