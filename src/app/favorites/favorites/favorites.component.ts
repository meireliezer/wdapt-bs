import { Component, OnInit } from '@angular/core';
import { faPlus, faTable, faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AddDialogComponent } from '../dialogs/add-dialog/add-dialog.component';
import { FavoritesService } from 'src/app/common/favorites/favorites.service';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent{

  public faPlus = faPlus;
  public faList = faList;
  public faTable = faTable
  public faSearch = faSearch;
  
  public get  isGridView()  {
    return this._isGridView;
  }
  
  
  private _isGridView;
  private ngbModalRef: NgbModalRef;
  

  constructor(private activatedRoute:ActivatedRoute,
              private modalService: NgbModal,
              private favoritesService: FavoritesService) {
    this.activatedRoute.url.subscribe( () =>  {
      this._isGridView = window.location.href.indexOf('grid') !== -1;
    });

  }

  public add(){
    this.ngbModalRef = this.modalService.open(AddDialogComponent);
    this.ngbModalRef.result.then(newFavorite => {
      this.favoritesService.add(newFavorite)
    }).catch( cancel =>{
      console.log('dissmis add ')
    })
  }



}
