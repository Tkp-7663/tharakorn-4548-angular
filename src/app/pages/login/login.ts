import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})

export class Login {
  email: string = '';
  password: string = '';

  onSubmit() {
    if (this.email && this.password) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // เพิ่ม logic login จริงได้ตรงนี้
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  }
}
