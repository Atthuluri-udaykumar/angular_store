import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter, getName } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counter!: number;
  counter$!: Observable<any>;
  name$!: Observable<string>;
  constructor(private store: Store<{ counter: any }>) { }

  ngOnInit(): void {
    // this.store.select('counter').subscribe(data => {
    //   this.counter = data.counter;
    // })

    //this is useing subscribe
    this.store.select(getCounter).subscribe(data => {
      this.counter = data;
    })

    //this is using observables
    this.counter$ = this.store.select(getCounter);
    this.name$ = this.store.select(getName);
  }

}
