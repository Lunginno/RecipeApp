import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {

  isSignUp: boolean = true;

  toggleForm(isSignUp: boolean) {
    this.isSignUp = isSignUp;
  }
}
