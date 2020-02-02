import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IHero } from './hero';
@Injectable({
    providedIn:'root'
})
export class HerosService {

    private heroesUrl = 'api/heros/BDD_Hero.json'; 
    constructor(private http: HttpClient) {}
    getHeros(): Observable<IHero[]> {
        return this.http
      .get<IHero[]>(this.heroesUrl)
      .pipe(map(data => data), catchError(this.handleError));
    }

    getHero(id: number): Observable<IHero> {
      return this.getHeros().pipe(
        map(heroes => heroes.find(hero => hero.Id === id))
      );
    }

    private handleError(res: HttpErrorResponse | any) {
        console.error(res.error || res.body.error);
        return observableThrowError(res.error || 'Server error');
      }
}