import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthData, UserData } from './auth.model';
import { LoadingService} from '../loading/loading.service';

import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/user';

@Injectable({ providedIn: 'root'})
export class AuthService {

  private token: string;

  constructor(private http: HttpClient, private router: Router, private loadingService: LoadingService) {}

  getToken() {
    return localStorage.getItem('token');
  }
  signup(email: string, password: string, nickname: string) {
    this.loadingService.show();
    const authData: UserData = {
      email: email,
      password: password,
      nickname: nickname
    };
    return this.http.post(BACKEND_URL + '/signup', authData)
    .subscribe( () => {
      this.router.navigate(['home']);
      this.loadingService.hide('Welcome!');
    }, () => this.loadingService.hide('Try again!', true));
  }
  login(email: string, password: string) {
    this.loadingService.show();
    const authData: AuthData = {
      email: email,
      password: password
    };
    return this.http.post<{message: string, token: string}>(BACKEND_URL + '/login', authData)
    .subscribe( response => {
      this.token = response.token;
      localStorage.setItem('token', response.token);
      this.router.navigate(['home']);
      this.loadingService.hide('Login success!');
    }, () => this.loadingService.hide('Credentials failed!', true));
  }
  autoLogin() {
    this.token = localStorage.getItem('token');
  }
  logout() {
    this.token = null;
    this.router.navigate(['']);
    localStorage.removeItem('token');
  }
}
