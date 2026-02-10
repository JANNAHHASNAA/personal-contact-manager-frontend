import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth';

  // Reactive login status
  private _isLoggedIn$ = new BehaviorSubject<boolean>(!!this.getToken());
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
    this._isLoggedIn$.next(true); // notify subscribers
  }

  logout() {
    localStorage.removeItem('token');
    this._isLoggedIn$.next(false); // notify subscribers
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
