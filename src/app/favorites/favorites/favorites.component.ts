import { Component, OnInit } from '@angular/core';
import { faPlus, faTable, faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  public faPlus = faPlus;
  public faList = faList;
  public faTable = faTable
  public faSearch = faSearch;
  
  public get  isGridView()  {
    return this._isGridView;
  }
  
  
  private _isGridView;

  

  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.url.subscribe( () =>  {
      this._isGridView = window.location.href.indexOf('grid') !== -1;
    });

  }



  ngOnInit() {
  }

}
