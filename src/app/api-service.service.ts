import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // private apiUrl = 'http://localhost:5000/api/contact'; 
  private apiUrl = 'https://jurisplanner.com/Backend/api/contact';

  constructor(private http: HttpClient) {}

  // Function to send contact form data
  sendContactForm(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiUrl, data, { headers });
  }

}
