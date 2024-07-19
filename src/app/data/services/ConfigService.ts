import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  readonly apiUrl: string;
  constructor() {
    this.apiUrl = 'http://178.141.253.196:8110/ws';
  }
}
// http://localhost:8080/ws/
