import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../model/AuthResponse.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }

  onlogin(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRE_BASE_API_KEY}`, { email, password, returnSecureToken: true })
  }

  formatUser(data: AuthResponse) {
    let expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000);
    let user = new User(data.email, data.idToken, data.localId, expirationDate);
    return user;
  }
}
