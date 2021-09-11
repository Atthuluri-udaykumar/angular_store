import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customCounter } from '../store/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value!: number;
  constructor(private store: Store<{ counter: any }>) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.store.dispatch(customCounter({ value: this.value }))
  }
}
