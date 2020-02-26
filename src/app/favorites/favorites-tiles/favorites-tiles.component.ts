import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/common/favorites/favorites.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-favorites-tiles',
  templateUrl: './favorites-tiles.component.html',
  styleUrls: ['./favorites-tiles.component.css']
})
export class FavoritesTilesComponent implements OnInit {

  public faEdit = faEdit;
  public faTrash = faTrash;

  public getList() {
    return  this.favoritesService.getList();
  }
  
  constructor(private favoritesService: FavoritesService) { 

  }


  ngOnInit() {
  }

}
