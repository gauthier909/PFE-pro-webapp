import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  model = new User('saruman' , 'yoda' , 'potter');
  constructor() { }
  submitted = false;
  onSubmit() { this.submitted = true; }
  ngOnInit() {
  }

}
