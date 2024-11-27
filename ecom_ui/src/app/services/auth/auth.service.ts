import { inject, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, catchError, throwError } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environment';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = environment.backend_api;

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  private tokenSubject = new BehaviorSubject<string | null>(null);
  token$ = this.tokenSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedToken = localStorage.getItem('auth_token');
      if (storedToken) {
        this.tokenSubject.next(storedToken);
        // this.getCurrentUser().subscribe();
      }
    }
  }

  isAuthenticated(): boolean {
    console.log(this.tokenSubject.getValue());
    return !!this.tokenSubject.getValue();
  }
  
  login(email: string, password: string): Observable<AuthResponse> {
    const loginData = { email, password };
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, loginData).pipe(
      tap(response => this.handleAuthResponse(response)),
      catchError(this.handleError)
    );
  }

  register(user: { name: string, email: string, password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/signup`, user).pipe(
      tap(response => this.handleAuthResponse(response)),
      catchError(this.handleError)
    );
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('auth_token');
    }
    this.currentUserSubject.next(null);
    this.tokenSubject.next(null);
  }

  private getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/me`).pipe(
      tap(user => this.currentUserSubject.next(user)),
      catchError(error => {
        this.logout();
        return throwError(() => error);
      })
    );
  }

  private handleAuthResponse(response: AuthResponse): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('auth_token', response.token);
    }
    this.tokenSubject.next(response.token);
    this.currentUserSubject.next(response.user);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(() => new Error(error.error?.message || 'An unknown error occurred'));
  }
}
