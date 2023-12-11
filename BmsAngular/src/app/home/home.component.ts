import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  num1: string = '';
  num2: string = '';
  res: number = 0;

  total() {
    this.res = parseInt(this.num1) + parseInt(this.num2);
  }


}
