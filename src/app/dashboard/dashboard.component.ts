import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from './../hero-service.service';
import { Hero } from './../heroes';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:Hero[]=[]

  constructor(private heroService: HeroServiceService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
      console.log(this.heroes);
  }

}
