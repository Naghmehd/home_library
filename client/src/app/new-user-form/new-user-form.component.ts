import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      registerAccountPath: '/api/auth'
    });
   }

  ngOnInit() {
  }

  register() {
    this._tokenService.registerAccount({
      email: 'test@example.com',
      password: 'password',
      passwordConfirmation: 'password'
    });
  }

}
