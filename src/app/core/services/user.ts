import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private api: Api, private auth: Auth) {}

  getUserById(): Observable<any> {
    const userId = this.auth.getUserId();
    if (!userId) throw new Error('User ID not found');

    return this.api.get(`/users/${userId}`);
  }
}
