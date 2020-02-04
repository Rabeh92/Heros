import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewHeroComponent } from './new-hero/new-hero.component';


const routes: Routes = [
  {
    path: '',
    component: NewHeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddHeroRoutingModule { }