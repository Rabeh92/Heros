import { NgModule } from '@angular/core';
import { AddHeroRoutingModule } from './add-hero-routing.module';
import { CommonModule } from '@angular/common';
import { NewHeroComponent } from './new-hero/new-hero.component';



@NgModule({
  declarations: [NewHeroComponent],
  imports: [
    CommonModule,
    AddHeroRoutingModule,
  ]
  //bootstrap: [NewHeroComponent]
})
export class AddHeroModule { }
