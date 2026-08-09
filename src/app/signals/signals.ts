import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})

export class Signals {
  counter = signal(0);
  constructor() {
    this.counter.set(this.counter() + 10);
     console.log('Counter incremented to: ' + this.counter());
   
  }
  ngOnInit() {
    console.log('Signals initialized'+this.counter());
}
}
