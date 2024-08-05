import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, catchError, throwError } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

interface User {
  id: string;
  email: string;
  name: string;
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
  private apiUrl = 'http://localhost:3000';

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  private tokenSubject = new BehaviorSubject<string | null>(null);
  token$ = this.tokenSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Check for stored token on service initialization
    // const storedToken = localStorage.getItem('auth_token');
    // if (storedToken) {
      // this.tokenSubject.next(storedToken);
      // this.getCurrentUser().subscribe();
    // }
  }

  login(email: string, password: string): Observable<AuthResponse> {
    const loginData = { email, password };
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, loginData).pipe(
      tap(response => this.handleAuthResponse(response)),
      catchError(this.handleError)
    );
  }

  register(name: string, email: string, password: string): Observable<AuthResponse> {
    console.log("register",name, email, password)
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/signup`, { name, email, password }).pipe(
      tap(response => this.handleAuthResponse(response)),
      catchError(this.handleError)
    );
  }

  // forgotPassword(email: string): Observable<{ message: string }> {
  //   return this.http.post<{ message: string }>(`${this.apiUrl}/forgot-password`, { email }).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // logout(): void {
  //   // localStorage.removeItem('auth_token');
  //   this.currentUserSubject.next(null);
  //   this.tokenSubject.next(null);
  // }

  // private getCurrentUser(): Observable<User> {
  //   return this.http.get<User>(`${this.apiUrl}/me`).pipe(
  //     tap(user => this.currentUserSubject.next(user)),
  //     catchError(error => {
  //       this.logout();
  //       return throwError(() => error);
  //     })
  //   );
  // }

  private handleAuthResponse(response: AuthResponse): void {
    if (isPlatformBrowser(this.platformId)) {
      // localStorage.setItem('auth_token', response.token);
      this.tokenSubject.next(response.token);
      this.currentUserSubject.next(response.user);
    } else {
      // Handle the case where localStorage is not available
      console.error('localStorage is not available.');
    }
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(() => new Error(error.error?.message || 'An unknown error occurred'));
  }
}
