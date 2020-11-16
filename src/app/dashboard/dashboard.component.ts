import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from '../hero-service.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroData: Array<any> = [];
  selectedHero: Object = {};
  constructor(private heroService : HeroServiceService) { }

  ngOnInit(): void {
    this.heroData = this.heroService.getHeroes();
  }

  selectedCard(hero : Hero){
    this.selectedHero = hero;
  }

}
