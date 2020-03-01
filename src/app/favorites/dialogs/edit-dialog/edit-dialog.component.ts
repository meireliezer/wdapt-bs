import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IFavorite } from 'src/app/model/favorite.interface';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {

  
  @Input()
  favorite:IFavorite

  constructor(public activeModal: NgbActiveModal) {     
  }

  public onSave(){
    this.activeModal.close(this.favorite);
  }

  public onCancel(){
    this.activeModal.dismiss();
  }


}
