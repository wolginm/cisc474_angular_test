import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  sharedValue = 5;
  constructor() { }
}
