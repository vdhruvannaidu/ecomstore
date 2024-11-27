import { Component, inject, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Subject, catchError, of, pipe, takeUntil } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  registerForm: FormGroup;
  isLoading = signal(false);
  error = signal<string | null>(null);

  private destroy$ = new Subject<void>();

  constructor() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    effect(() => {
      // Effect to handle any side-effects if needed
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.isLoading.set(true);
      this.error.set(null);
      console.log("this.registerForm.value",this.registerForm.value)

      this.authService.register(this.registerForm.value)
        .pipe(
          takeUntil(this.destroy$),
          catchError(err => {
            this.error.set(err.message || 'An error occurred during registration');
            this.isLoading.set(false);
            return of(null);
          })
        )
        .subscribe({
          next: (response:any) => {
            if (response) {
              this.router.navigate(['/']);
            }
            this.isLoading.set(false);
          }
        });
    } else {
      this.error.set('Please fill out all fields correctly');
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
