import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/store/app.store';
import { getAdditon } from '../store/addition.selector';

@Component({
  selector: 'app-addition-view',
  templateUrl: './addition-view.component.html',
  styleUrls: ['./addition-view.component.css']
})
export class AdditionViewComponent implements OnInit {

  value$!: Observable<number>;
  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
    this.value$ = this.store.select(getAdditon)
  }

}
