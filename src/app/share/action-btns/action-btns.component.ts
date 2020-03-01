import { Component,  Input } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IFavorite } from 'src/app/model/favorite.interface';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RemoveDialogComponent } from 'src/app/fravorites/dialogs/remove-dialog/remove-dialog.component';
import { FavoritesService } from 'src/app/common/favorites/favorites.service';

@Component({
  selector: 'app-action-btns',
  templateUrl: './action-btns.component.html',
  styleUrls: ['./action-btns.component.css']
})
export class ActionBtnsComponent  {
  
  public faEdit = faEdit;
  public faTrash = faTrash;

  @Input()
  public favorite:IFavorite;

  private ngModalRef: NgbModalRef;

  constructor(private modalService: NgbModal,              
              private favoritesService: FavoritesService) {    
  }


  public remove(){
    this.ngModalRef = this.modalService.open(RemoveDialogComponent);
    this.ngModalRef.componentInstance.item =   this.favorite;

    this.ngModalRef.result.then( (ok)=> {
      this.favoritesService.remove(this.favorite.id);
      
    }).catch( no => {
      console.log('dissmised');
    })
  }
  
}
