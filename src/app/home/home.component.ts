import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  state = {
    counter: 0
  }

  onClickIncrement() {
    this.state.counter = this.state.counter + 1;
  }

  ngOnInit(): void {
  }

}
