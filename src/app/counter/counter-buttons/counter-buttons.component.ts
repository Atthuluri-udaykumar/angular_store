import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, Increment, reset } from '../store/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store: Store<{ counter: { counter: number } }>) { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.store.dispatch(Increment())
  }

  onDecrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())

  }
}
