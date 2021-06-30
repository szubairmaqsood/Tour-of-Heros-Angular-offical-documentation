import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor() { }
  getHeroes():  Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
