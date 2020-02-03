import { Component, OnInit } from '@angular/core';
import { HerosService } from '../home/heroes.service';
import { IHero } from '../home/hero';
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  

  heroes: IHero[] = [];
  filtredHeros: IHero[]=[];
  private _heroFilter: string = '';

  get heroFilter(): string {
    return this._heroFilter;
  }
  set heroFilter(value: string) {
    this._heroFilter = value;
    this.filtredHeros=this.heroFilter?this.performFilter(this.heroFilter):this.heroes;
  }
  
  constructor(private herosService: HerosService) { }
  
  performFilter(filterBy: string): IHero[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.heroes.filter((hero: IHero) =>
      hero.Nom.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  ngOnInit() {
    this.herosService.getHeros()
      .subscribe(heroes =>{
        this.heroes = heroes;
        this.filtredHeros=this.heroes;
      } );
  }
}
