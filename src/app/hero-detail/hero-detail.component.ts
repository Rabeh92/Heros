import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {IHero} from '../home/hero';
import { HerosService } from '../home/heroes.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  pageTitle:string='Hero Detail';
  hero:IHero;
  constructor(
    private herosService:HerosService,
    private root:ActivatedRoute
    ) { }

  ngOnInit() {
    let Id=+this.root.snapshot.paramMap.get('Id');
    this.herosService.getHero(Id).subscribe(hero => (this.hero = hero));
  }

}
