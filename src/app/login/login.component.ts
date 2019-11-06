import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log(this.login);
    this.loginService.postLogin(this.login).subscribe();
    console.log("Login Credentials sent to backend successfully.");
  }

}
