import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  id: number;
  name: string;
}
export class UserService {

  constructor() { }
  serviceProperties = 'Service Created';
  getUser(): Promise<User[]> {
    return Promise.resolve ([
{id: 1, name: 'John 1'},
{id: 2, name: 'John 2'},
{id: 3, name: 'John 3'},
{id: 4, name: 'John 4'},
{id: 5, name: 'John 5'},
{id: 6, name: 'John 6'},
{id: 7, name: 'John 7'},
{id: 8, name: 'John 7'}
    ]);
  }
  getTodayDate() {
    const ndate = new Date();
    return ndate;
  }
}
