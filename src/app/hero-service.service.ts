import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './dummyData';



@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
