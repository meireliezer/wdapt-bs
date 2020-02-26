import { Injectable } from '@angular/core';
import { IFavorite } from 'src/app/model/favorite.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private _favoritesList: Array<IFavorite> = [];
  private _nextId = 1;

  constructor() { 

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


  private  nextId(){
    let currentId = (this._nextId || 1) ;
    this._nextId = currentId + 1;
    return currentId
  }
}
