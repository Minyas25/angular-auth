import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './entities';
import { environment } from 'src/environments/environment';
import { switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged:User|null = localStorage.getItem('logged')?JSON.parse(localStorage.getItem('logged')!):null;

  constructor(private http:HttpClient) { }

  addUser(user:User) {
    return this.http.post<User>(environment.serverUrl+'/api/user', user);
  }
  login(user:User) {
    return this.http.post<{token:string}>(environment.serverUrl+'/api/login', user).pipe(
      tap(data => {
        localStorage.setItem('token', data.token);
      }),
      switchMap(() => this.getUser()),
      tap(data => {
        this.logged = data;
        localStorage.setItem('logged', JSON.stringify(data));
      })
    );
  }

  getUser() {
    return this.http.get<User>(environment.serverUrl + '/api/protected');
  }

  logout() {
    localStorage.removeItem('token');
    this.logged =null;
  }
}
