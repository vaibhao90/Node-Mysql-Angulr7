import { Injectable } from '@angular/core';
import { Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Login} from './login';
import {environment} from '../environment/environment';


@Injectable()
export class LoginService {
  private currentUserSubject: BehaviorSubject<Login>;
  public currentUser: Observable<Login>;


  loginUrl =  environment.apiUrl+ "/user";
  //Create constructor to get Http instance
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Login {
      return this.currentUserSubject.value;
  }
   public set currentUserValue(user: Login){
    this.currentUserSubject.next(user);
   }

  login(dataObj){
    return this.http.post(this.loginUrl+"/login", dataObj)
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
