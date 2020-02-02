import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HerosService } from '../home/heroes.service';
import { IHero } from '../home/hero';
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes: IHero[] = [];
  router: Router;
  constructor(private herosService: HerosService) { }

  ngOnInit() {
    this.herosService.getHeros()
      .subscribe(heroes => this.heroes = heroes);
  }
  gotoDetail(hero: IHero): void {
    const link = ['/detail', hero.Id];
    this.router.navigate(link);
  }

}
