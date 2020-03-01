import { Component,  Input } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IFavorite } from 'src/app/model/favorite.interface';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RemoveDialogComponent } from 'src/app/favorites/dialogs/remove-dialog/remove-dialog.component';
import { FavoritesService } from 'src/app/common/favorites/favorites.service';
import { EditDialogComponent } from 'src/app/favorites/dialogs/edit-dialog/edit-dialog.component';
import { from } from 'rxjs';

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

  public edit(){
    this.ngModalRef = this.modalService.open(EditDialogComponent);
    this.ngModalRef.componentInstance.favorite = this.favorite;

    // Convert Promise to observable
    from(this.ngModalRef.result).subscribe(
      (favorite) => {
        this.favoritesService.edit(favorite);
        //this.favorite = favorite;
      }, 
      _ => console.log('cancel edit')
    );
  }
  
}
