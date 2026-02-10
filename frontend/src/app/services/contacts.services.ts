import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.services';


@Injectable({ providedIn: 'root' })
export class ContactService {
  private baseUrl = 'http://localhost:3000/api/contacts';

  constructor(private http: HttpClient, private auth: AuthService) { }

  private getHeaders() {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    };
  }

  getContacts(): Observable<any> {
    return this.http.get(this.baseUrl, this.getHeaders());
  }

  addContact(contact: any): Observable<any> {
    return this.http.post(this.baseUrl, contact, this.getHeaders());
  }

  updateContact(id: number, contact: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, contact, this.getHeaders());
  }


  deleteContact(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, this.getHeaders());
  }
}
