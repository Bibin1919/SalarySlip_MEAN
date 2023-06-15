import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SladdComponent } from './sladd/sladd.component';
import { SltableComponent } from './sltable/sltable.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: '/sladd', component: SladdComponent
  },
  {
    path: '/sltable', component: SltableComponent
  },
  {
    path:'sltable/view/:_id', component: ViewComponent
  },
  {
    path:'sltable/edit/:id', component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
