import { Component, OnInit } from '@angular/core';
import { User } from '../../core/services/user'; // ปรับ path ให้ตรง
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  user: any;

  constructor(private userService: User) {}

  ngOnInit(): void {
    this.userService.getUserById().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('ดึงข้อมูลผู้ใช้ล้มเหลว:', err);
      },
    });
  }
}
