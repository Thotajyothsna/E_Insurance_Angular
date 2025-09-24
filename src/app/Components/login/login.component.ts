import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm: FormGroup;
  loginError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) return;

    const loginData = this.loginForm.value;

    this.userService.login(loginData).subscribe({
      next: (res: any) => {
        // ✅ Save token & role in localStorage
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('role', res.data.role);

        this.snackBar.open('Login Successful!', 'Close', { duration: 3000 });

        // ✅ Navigate based on role
        if (res.data.role === 'Admin') {
          this.router.navigate(['/register']); // Admin can go to register page
        } else {
          this.router.navigate(['/welcome']); // other roles go to welcome
        }
      },
      error: () => {
        this.loginError = 'Invalid login credentials';
        this.snackBar.open('Invalid login credentials', 'Close', { duration: 3000 });
      }
    });
  }
}
