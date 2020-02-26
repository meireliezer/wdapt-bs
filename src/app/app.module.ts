import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ActionsLogComponent } from './actions-log/actions-log.component';
import { HomeComponent } from './home/home/home.component';
import { AppRouterModule } from './router/app-router.module';
import { FavoritesComponent } from './favorites/favorites/favorites.component';
import { FavoritesGridComponent } from './favorites/favorites-grid/favorites-grid.component';
import { FavoritesTilesComponent } from './favorites/favorites-tiles/favorites-tiles.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ActionsLogComponent,
    HomeComponent,
    FavoritesComponent,
    FavoritesGridComponent,
    FavoritesTilesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
