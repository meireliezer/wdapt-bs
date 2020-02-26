import { Component } from '@angular/core';
import { faCoffee, faTable, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wdapt-bs';
  faCoffee = faCoffee;
  faTable = faTable;
  faUser = faUser;

  constructor(){
    console.log('faTable', faTable);
  }
  
}
