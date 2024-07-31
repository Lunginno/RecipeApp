import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  public signUpForm!: FormGroup;
  public login!: FormGroup;
  public isSignUp: boolean = true; // Flag to toggle between sign up and sign in forms
  public error: string | null = null;
  public successMessage: string | null = null;
  private token: string | undefined;
  public userLoggedIn: boolean = false;
  public userEmail: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]],
      password: ['', [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^/&\\\\]).{6,}$')
      ]],
      cpassword: ['', Validators.required]
    }, { validator: this.checkPasswords });
    
    this.login = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', Validators.required]
    });
  }

  checkPasswords(formGroup: FormGroup): any {
    const password = formGroup.get('password')?.value;
    const cpassword = formGroup.get('cpassword')?.value;

    if (password === cpassword) {
      return null;
    } else {
      formGroup.get('cpassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
  }

  toggleForm(isSignUp: boolean): void {
    this.isSignUp = isSignUp;
  }

  onSignUp(): void {
    if (this.signUpForm.invalid) return;

    const newUser = { ...this.signUpForm.value };
    this.http.post<{ token: string }>("http://localhost:8080/api/v1/auth/register", newUser).subscribe(
      resp => {
        const token = resp.token;
        if (token) {
          this.token = token;
          localStorage.setItem("token", token);
        }
        this.error = null;
        this.successMessage = 'Registered successfully';
        this.signUpForm.reset();
        setTimeout(() => {
          this.successMessage = null;
          this.router.navigate(["/home"]);
          this.authService.login(newUser.email, token);
        }, 1000);
      },
      (error: HttpErrorResponse) => {
        this.successMessage = null;
        if (error.status === 409) {
          this.error = 'User already exists. Please try logging in.';
        } else if (error.status === 404) {
          this.error = 'User not found. Please check your input.';
        } else {
          this.error = 'Something went wrong';
        }
      }
    );
  }

  signInForm(): void {
    this.http.post<{ token: string }>("http://localhost:8080/api/v1/auth/authenticate", this.login.value)
      .subscribe(
        resp => {
          const token = resp.token;
          if (token) {
            this.token = token;
            this.userEmail = this.login.value.email;
            localStorage.setItem("token", token);
            this.userLoggedIn = true;
            this.error = null; // Clear any previous error message
            this.successMessage = "Login successful."; // Set success message
            setTimeout(() => {
              this.successMessage = null; // Clear success message after 3 seconds
              this.router.navigate(["/home"]); // Navigate to home upon successful login
              this.authService.login(this.userEmail, token);
            }, 1000); // 3 seconds delay before clearing success message and navigating
          } else {
            this.error = "User not found";
          }
        },
        (error: HttpErrorResponse) => {
          // console.error("Error details:", error); // Log the error details
          if (error.status === 401) {
            this.error = 'Incorrect password or User does not exist. Please try again.';
          } else if (error.status === 404) {
            this.error = 'User not found. Please check your email.';
          } else {
            this.error = 'Something went wrong. Please try again later.';
          }
        }
      );
    }
}
