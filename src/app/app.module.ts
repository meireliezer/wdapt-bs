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
import { FavoritesTilesComponent } from './favorites/favorites-tiles/favorites-tiles.component';
import { ActionBtnsComponent } from './share/action-btns/action-btns.component';
import { AddFavoritesComponent } from './favorites/add-favorites/add-favorites.component';
import { RemoveFavoritesComponent } from './favorites/remove-favorites/remove-favorites.component';
import { HoverSpyDirective } from './share/action-btns/hover-spy.directive';
import { RemoveDialogComponent } from './fravorites/dialogs/remove-dialog/remove-dialog.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ActionsLogComponent,
    HomeComponent,
    FavoritesComponent,
    FavoritesGridComponent,
    FavoritesTilesComponent,
    ActionBtnsComponent,
    AddFavoritesComponent,
    RemoveFavoritesComponent,
    HoverSpyDirective,
    RemoveDialogComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[RemoveDialogComponent]
})
export class AppModule { }
