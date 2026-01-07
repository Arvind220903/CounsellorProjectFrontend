import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userdetail } from '../userdetail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  private router = inject(Router);
   ud = inject(Userdetail);

  dashboardData: any;

  ngOnInit(): void {

    // 🚨 guard: user not logged in
    if (this.ud.counsellorId() === 0) {
      this.router.navigate(['/login']);
      return;
    }

    // ✅ correct call
    this.ud.dashboard().subscribe({
      next: (res) => {
        this.dashboardData = res;
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }

  add() {
    this.router.navigate(['/addenquiry']);
  }

  view() {
    this.router.navigate(['/view']);
  }
}
