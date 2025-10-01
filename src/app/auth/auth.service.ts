import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../core/models/user.model';

interface LoginResponse {
  accessToken: string;
  user: User;
}

export interface RegisterDto {
  email: string;
  password: string;
  name?: string;
}

export interface RegisterResponse {
  id: number;
  email: string;
  name?: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/v1/auth'; // replace with your backend URL


  register(dto: RegisterDto): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/register`, dto);
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, password });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
