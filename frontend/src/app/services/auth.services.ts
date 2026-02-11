import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = `${environment.apiUrl}/api/auth`;

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
    this._isLoggedIn$.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this._isLoggedIn$.next(false);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
