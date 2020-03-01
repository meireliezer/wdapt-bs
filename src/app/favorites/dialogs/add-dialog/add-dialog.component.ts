import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IFavorite } from 'src/app/model/favorite.interface';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent  {

  public favorite:IFavorite;


  constructor(public activeModal: NgbActiveModal) {     
    this.favorite = { 
      websiteName: '', 
      url: '', 
      img: '', 
      id:-1
    };
  }

  public onAdd(){
    this.activeModal.close(this.favorite);
  }

  public onCancel(){
    this.activeModal.dismiss();
  }

}
