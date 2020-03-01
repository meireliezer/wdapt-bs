import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { HoverSpyDirective } from './share/action-btns/hover-spy.directive';
import { RemoveDialogComponent } from './favorites/dialogs/remove-dialog/remove-dialog.component';
import { AddDialogComponent } from './favorites/dialogs/add-dialog/add-dialog.component';
import { EditDialogComponent } from './favorites/dialogs/edit-dialog/edit-dialog.component';
import { FormsModule } from '@angular/forms';
import { UrlValidatorDirective } from './share/form-validators/url-validator.directive';


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
    HoverSpyDirective,
    RemoveDialogComponent,
    AddDialogComponent,    
    EditDialogComponent, 
    UrlValidatorDirective
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[RemoveDialogComponent, AddDialogComponent, EditDialogComponent]
})
export class AppModule { }
