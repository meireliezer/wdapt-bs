import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RemoveDialogComponent } from 'src/app/favorites/dialogs/remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private ngModalRef: NgbModalRef;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }


  public clickme(){
    this.ngModalRef = this.modalService.open(RemoveDialogComponent);
    this.ngModalRef.componentInstance.item =   {
      websiteName:'meir',
      url: 'meir',
      img: 'meir',
      id: -1
    };

    this.ngModalRef.result.then( (ok)=> {
      console.log('ok',ok);
    }).catch( no => {
      console.log('no',no);
    })
  }

}
