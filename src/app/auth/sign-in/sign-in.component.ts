import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setLoadingAction } from 'src/app/shared/store/shated.actions';
import { appState } from 'src/app/store/app.store';
import { loginStart } from '../store/auth.action';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.store.dispatch(setLoadingAction({ isLoading: true }))
    this.store.dispatch(loginStart({ email: 'test@gmail.com', password: 'test@123' }))
  }
}

