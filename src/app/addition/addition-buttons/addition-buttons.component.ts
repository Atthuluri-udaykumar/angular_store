import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/app.store';
import { toAddValue, toSubValue } from '../store/addition.acitons';

@Component({
  selector: 'app-addition-buttons',
  templateUrl: './addition-buttons.component.html',
  styleUrls: ['./addition-buttons.component.css']
})
export class AdditionButtonsComponent implements OnInit {
  addValue!: number;
  subValue!: number;
  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
  }

  onSubstract() {
    this.store.dispatch(toSubValue({ value: this.subValue }))

  }

  onAdd() {
    this.store.dispatch(toAddValue({ value: this.addValue }))
  }

}
