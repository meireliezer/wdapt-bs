import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IFavorite } from 'src/app/model/favorite.interface';

@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.css']
})
export class RemoveDialogComponent implements OnInit {

  @Input()
  item:IFavorite;
  
  
  constructor(public activeModal: NgbActiveModal) {
    this.item = {
      websiteName:'stub',
      url: 'stub',
      img: 'stub',
      id: -1
    };
  }

  ngOnInit() {
  }


  public onRemove(){
    this.activeModal.close('remove!')
  }

  public onCancel(){
    this.activeModal.dismiss('cancel');
  }

}
