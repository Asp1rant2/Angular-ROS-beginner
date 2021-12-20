import { Component } from '@angular/core';

declare var myAdd: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ros';

  constructor() {
    console.log(myAdd(1,2));
  }

}
