import { Injectable } from '@angular/core';
import { IFavorite } from 'src/app/model/favorite.interface';
import { ActionsLogService } from '../actions-log/actions-log.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private _favoritesList: Array<IFavorite> = [];
  private _nextId = 1;

  constructor(private actiosLogService:ActionsLogService) { 

    this._favoritesList.push({
      id: this.nextId(),
      websiteName: 'Ynet',
      url: 'http://yent.co.il',
      img: ''
    });
    this._favoritesList.push({
      id: this.nextId(),
      websiteName: 'CNN',
      url: 'http://cnn.com',
      img: ''
    });
    this._favoritesList.push({
      id: this.nextId(),
      websiteName: 'Ynet',
      url: 'http://yent.co.il',
      img: ''
    });
    this._favoritesList.push({
      id: this.nextId(),
      websiteName: 'CNN',
      url: 'http://cnn.com',
      img: ''
    });
    this._favoritesList.push({
      id: this.nextId(),
      websiteName: 'Ynet',
      url: 'http://yent.co.il',
      img: ''
    });
    this._favoritesList.push({
      id: this.nextId(),
      websiteName: 'CNN',
      url: 'http://cnn.com',
      img: ''
    });
  
  }

  public getList(){
    return this._favoritesList;
  }


  public remove(id:number){
    let item = this._favoritesList.find( item => item.id === id);
    this.actiosLogService.remove(item.websiteName, item.url);
    this._favoritesList = this._favoritesList.filter( f => f !== item);
  }

  public edit(favorite:IFavorite){
    let item = this._favoritesList.find( item => item.id === favorite.id);
    if( item ){
      item = favorite;
      this.actiosLogService.edit( favorite.websiteName, favorite.url) ;
    }
  }

  private  nextId(){
    let currentId = (this._nextId || 1) ;
    this._nextId = currentId + 1;
    return currentId
  }
}
