import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Userdetail } from '../userdetail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addenquiry',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addenquiry.html',
  styleUrl: './addenquiry.css',
})
export class Addenquiry {

  private routes = inject(Router);
  private ud = inject(Userdetail);

  name = '';
  phn = '';
  email = '';
  classmode = '';
  enqStatus = 'OPEN';
  course = '';

  add() {
    const user = {
      name: this.name,
      phn: this.phn,
      email: this.email,
      classmode: this.classmode,
      enqStatus: this.enqStatus,
      course: this.course,

      // ✅ READ signal value correctly
      counsellorId: this.ud.counsellorId()
    };

    this.ud.addenq(user).subscribe({
      next: () => {
        alert('Enquiry Added');
      },
      error: () => {
        this.routes.navigate(['/login']);
      }
    });
  }

  dash() {
    this.routes.navigate(['/dashboard']);
  }
}
