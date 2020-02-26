import { Component, OnInit, Input, AfterViewInit, ElementRef, HostListener, Renderer2, HostBinding } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IFavorite } from 'src/app/model/favorite.interface';

@Component({
  selector: 'app-action-btns',
  templateUrl: './action-btns.component.html',
  styleUrls: ['./action-btns.component.css']
})
export class ActionBtnsComponent implements OnInit, AfterViewInit {
  
  public faEdit = faEdit;
  public faTrash = faTrash;

  @Input()
  public favorite:IFavorite;

  constructor(private el:ElementRef,  private rederer:Renderer2) {    
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }
}
