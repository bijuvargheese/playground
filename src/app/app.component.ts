import { Component } from '@angular/core';
// import { DataService } from "./data.service";
import { trigger, keyframes, animate, state, style, transition } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`
    p {
      width: 200px;
      background: lightgray;
      margin: 100px auto;
      text-align: center;
      padding: 20px;
      font-size: 1.5em;
    }
  `],
  animations: [
    trigger("myAnimation", [
      state("small", style({
        transform: 'scale(1)'
      })),
      state("large", style({
        transform: 'scale(1.2)'
      })),

      transition('small => large', animate('300ms ease-in')),

    ]),
  ]
})
export class AppComponent {
  title = 'app';
  state = 'small'

  myObject = {
    age:32,
    name:'Thomas'
  }

  myArr = ['Shreya is a beautiful girl', 'Tintu is a KOPRATI', '']

  buttonStatus=false

  clickEvent(event) {
    console.log(event)
  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small')
  }
}
