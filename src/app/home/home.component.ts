import { Component, OnInit } from '@angular/core';
import { HerosService } from './heroes.service';
import { IHero } from './hero';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroes:IHero[]=[];
  router: Router;
  constructor(private herosService:HerosService) {}

  ngOnInit() {
    this.herosService.getHeros()
    .subscribe(heroes => this.heroes = heroes);
  }
  
}
