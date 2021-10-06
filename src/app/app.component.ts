import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getSharedState } from './shared/store/shared.selector';
import { appState } from './store/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-store';
  showLoading$!: Observable<boolean>
  constructor(private store: Store<appState>) {

  }
  ngOnInit(): void {
    this.showLoading$ = this.store.select(getSharedState);
  }
}
