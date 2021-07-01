import { Component, OnInit } from '@angular/core';
import { Hero } from './../heroes';
import { HeroServiceService } from './../hero-service.service';
import { MessageService } from './../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*
   hero:Hero = {
     id: 1,
     name: 'Windstrom'
   };
   */

   heroes:Hero[] = [];
   //selectedHero?: Hero;

   
  constructor(private heroService: HeroServiceService,private messageService: MessageService) { }

  
  ngOnInit(): void {
    this.getHeroes();
  }
/*
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
*/
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  

}
