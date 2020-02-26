import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from "@angular/router"
import { ActionsLogComponent } from '../actions-log/actions-log.component';
import { HomeComponent } from '../home/home/home.component';
import { FavoritesComponent } from '../favorites/favorites/favorites.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },  
  {
      path: 'actions-log',
      component: ActionsLogComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
},
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '**',
    redirectTo: '/home'
  }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
