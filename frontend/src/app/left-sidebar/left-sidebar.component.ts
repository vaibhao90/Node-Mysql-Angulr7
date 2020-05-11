import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  isLoggedIn: boolean = false;
  constructor(private loginService: LoginService){
    let currentUser = this.loginService.currentUserValue;
    this.isLoggedIn = currentUser && currentUser.token && currentUser.isLoggedIn;
  }

  ngOnInit(){
    this.loginService.currentUser.subscribe((value)=> {
      let currentUser = this.loginService.currentUserValue;
      this.isLoggedIn = currentUser && currentUser.token && currentUser.isLoggedIn;
    })
  }

}
