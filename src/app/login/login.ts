import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Userdetail } from '../userdetail';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

  email: string = '';
  pass: string = '';

  user: any = {
    email: '',
    pass: ''
  };

  private router = inject(Router);
  private ud = inject(Userdetail);

  send() {
    this.user.email = this.email;
    this.user.pass = this.pass;

    this.ud.post(this.user).subscribe({
      next: (res: any) => {
        console.log('Login successful:', res);
        this.ud.counsellorId.set(res.counsellorId);
        this.router.navigate(['/dashboard']);
        this.ud.dash = res; // Store dashboard data
      },
      error: (err) => {
        console.error('Login failed:', err);
      }
    });
  }
}
