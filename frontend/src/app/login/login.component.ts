import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import {MessageService} from 'primeng/api';
import { Observable, BehaviorSubject } from 'rxjs';
import {Login} from './login';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  returnUrl: string;

  constructor(private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService) { 
      // redirect to home if already logged in
      if (this.loginService.currentUserValue) { 
        this.router.navigate(['/dashboard']);
    }
    }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  loginUser(){

    this.loginService.login({
      email: this.email,
      password: this.password
    })      .subscribe(
      response => { 
        let data = <{statusCode: number, statusMessage: string, token: string, err: any}> response;
        console.log("data", data);
        
        if(data.statusCode ==200){
          this.messageService.add({
            severity:'success', summary:'Service Message', detail:'Via MessageService',
            closable: false
          })
          let user = <Login> {
            email: this.email,
            token: data.token,
            isLoggedIn: true
          };
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.loginService.currentUserValue = user;
          this.router.navigate([this.returnUrl]);

        }else{
          this.messageService.add(
            {severity:'error', summary:'Info Message', detail: data.statusMessage,
            closable: false
            }
          );
        }
        
      },
      errorCode => {
        console.log("errorCode", errorCode);
      });


  }
}
