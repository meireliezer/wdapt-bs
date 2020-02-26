import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from "@angular/router"
import { ActionsLogComponent } from '../actions-log/actions-log.component';
import { HomeComponent } from '../home/home/home.component';
import { FavoritesComponent } from '../favorites/favorites/favorites.component';
import { FavoritesGridComponent } from '../favorites/favorites-grid/favorites-grid.component';
import { FavoritesTilesComponent } from '../favorites/favorites-tiles/favorites-tiles.component';


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
    component: FavoritesComponent,
    children: [
      {
        path:'grid',
        component: FavoritesGridComponent
      },
      {
        path:'tiles',
        component: FavoritesTilesComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/favorites/grid'
      }
    ]
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
