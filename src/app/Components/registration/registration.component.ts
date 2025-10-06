import { Component } from '@angular/core';
import{FormGroup,Validators,FormBuilder} from '@angular/forms';
import { UserService } from '../../Services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerForm: FormGroup;
  usernameExistsError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.fb.group({
      fullname: ['', [Validators.required,Validators.pattern(/^[A-Za-z ]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required,Validators.pattern(/^[A-Za-z](?:[A-Za-z]|_(?!_))*$/)]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(25)]],
      role: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('registration form:',this.registerForm.value);
    if (this.registerForm.invalid) return;

    const username = this.registerForm.get('username')?.value;
console.log('username:',username);
    // Step 1: Check if username exists
    this.user.usernameExists(username).subscribe({
      next: (res: any) => {
        console.log('respone msg:',res.msg);
        if (res.msg === 'Not Exists') {
          // Username not exists, proceed to register
          this.registerUser();
        } else {
          // Username exists, show error under username
          this.usernameExistsError = 'Username already exists';
          this.registerForm.get('username')?.setErrors({ exists: true });
        }
      },
      error: (err) => {
        console.error(err);
        this.snackBar.open('UserName Already Exists', 'Close', { duration: 3000 });
      }
    });
  }

  private registerUser() {
    const model = {
      username: this.registerForm.get('username')?.value,
      password: this.registerForm.get('password')?.value,
      email: this.registerForm.get('email')?.value,
      role: this.registerForm.get('role')?.value,
      fullname:this.registerForm.get('fullname')?.value
    };
console.log('mode:',model);
    this.user.register(model).subscribe({
      next: (res: any) => {
        this.snackBar.open(res.msg, 'Close', { duration: 3000 });
        this.registerForm.reset();
      },
      error: (err) => {
        console.error(err);
        this.snackBar.open('Registration failed', 'Close', { duration: 3000 });
      }
    });
  }
}
