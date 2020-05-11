import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login/login';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLogggedIn: boolean = false;
  title = 'frontend';

  constructor(private loginService: LoginService){

  }
  ngOnInit(){
    this.loginService.currentUser.subscribe((value)=> {
      let currentUser = this.loginService.currentUserValue;
      this.isLogggedIn = currentUser && currentUser.token && currentUser.isLoggedIn;
    })
  }

}
