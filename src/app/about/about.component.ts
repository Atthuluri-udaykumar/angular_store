import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from '../store/app.store';
import { editAbout } from './store/about.action';
import { aboutText } from './store/about.selector';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutText$!: Observable<any>
  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
    this.aboutText$ = this.store.select(aboutText);
  }

  onEdit() {
    this.store.dispatch(editAbout({ about: 'Jai balayy' }))
  }

}
