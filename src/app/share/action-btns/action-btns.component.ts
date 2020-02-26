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

  @HostListener('mouseenter', ['$event'])
  private onMouseEnter(event){

    
    this.rederer.removeClass(this.el.nativeElement.children[0], 'invisible');
  }

  @HostListener('mouseleave', ['$event'])
  private onMouseLeave(event){
    this.rederer.addClass(this.el.nativeElement.children[0], 'invisible');
  }
  

  constructor(private el:ElementRef,  private rederer:Renderer2) {    
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }
}
