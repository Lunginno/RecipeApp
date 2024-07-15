import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './loginpage.component.html',
    styleUrls: ['./loginpage.component.scss']
})
export class LoginComponent implements OnInit {
    signUpForm!: FormGroup;
    signInForm!: FormGroup;
    isSignUp: boolean = true; // Flag to toggle between sign up and sign in forms

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.signUpForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        this.signInForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    toggleForm(isSignUp: boolean){
        this.isSignUp = isSignUp;
    }

    onSignUp(): void {
        if (this.signUpForm.valid) {
            // Perform signup logic here
            console.log('Sign up form submitted:', this.signUpForm.value);
        } else {
            // Mark all fields as touched to display validation messages
            this.markFormGroupTouched(this.signUpForm);
        }
    }

    onSignIn(): void {
        if (this.signInForm.valid) {
            // Perform signin logic here
            console.log('Sign in form submitted:', this.signInForm.value);
        } else {
            // Mark all fields as touched to display validation messages
            this.markFormGroupTouched(this.signInForm);
        }
    }

    // Helper method to mark all form fields as touched
    markFormGroupTouched(formGroup: FormGroup): void {
        Object.values(formGroup.controls).forEach(control => {
            control.markAsTouched();
        });
    }
}

