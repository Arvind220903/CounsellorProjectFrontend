import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Userdetail } from '../userdetail';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.html',
  styleUrl: './view.css',
})
export class View implements OnInit {

  items = signal<any[]>([]);
  private ud = inject(Userdetail);

  ngOnInit(): void {
    this.ud.view().subscribe({
      next: (res: any[]) => this.items.set(res),
      error: (err) => console.log(err)
    });
  }

  onStatusChange(index: number, event: Event) {
  const newStatus = (event.target as HTMLSelectElement).value;

  const payload = {
    enquiryId: this.items()[index].enquiry_Id, // ✅ DB ID
    status: newStatus                           // ✅ correct name
  };

  this.ud.updateStatus(payload).subscribe({
    next: (res:any) => {
      this.items.set(res); // refresh list
    },
    error: (err) => console.log(err)
  });
}


  
}

  

