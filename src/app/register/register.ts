import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Userdetail } from '../userdetail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  name = '';
  pass = '';
  email = '';

  private router = inject(Router);
  private ud = inject(Userdetail);

  register() {
    const payload = {
      name: this.name,
      pass: this.pass,
      email: this.email
    };

    this.ud.register(payload).subscribe({
      next: (res) => {
        if (res.message === 'success') {
          alert('Registration successful');
          this.router.navigate(['/login']);
        }
      },
      error: () => {
        alert('Registration failed or email already exists');
      }
    });
  }
}
