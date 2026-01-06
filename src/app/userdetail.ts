import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Userdetail {
  dash: any;
  counsellorId = signal<number>(0);
  private http = inject(HttpClient);

  // LOGIN
  post(user: any) {
    return this.http.post(
      'https://counsellorproject.onrender.com/login',
      user,
      { withCredentials: true }
    );
  }

  // REGISTER
  register(user: any) {
    return this.http.post<{ message: string }>(
      'https://counsellorproject.onrender.com/register',
      user
    );
  }

  // ADD ENQUIRY
  addenq(user: any) {
    return this.http.post(
      'https://counsellorproject.onrender.com/enquiry',
      user,
      { withCredentials: true }
    );
  }

  // VIEW ENQUIRIES
  view() {
    return this.http.get<any[]>(
      `https://counsellorproject.onrender.com/enquiries/${this.counsellorId()}`,
      { withCredentials: true }
    );
  }

  // DASHBOARD DATA
  dashboard() {
    return this.http.get(
      `https://counsellorproject.onrender.com/dashboard/${this.counsellorId()}`,
      { withCredentials: true }
    );
  }

  // UPDATE STATUS
  updateStatus(data: { enquiryId: number; status: string }) {
    return this.http.post(
      'https://counsellorproject.onrender.com/statusupdate',
      data,
      { withCredentials: true }
    );
  }
}
