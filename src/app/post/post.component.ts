import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from '../store/app.store';
import { getPost, getPostById } from './store/post.selector';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postdata$!: Observable<any>
  constructor(
    private store: Store<appState>,
    private _route: Router,
  ) { }

  ngOnInit(): void {
    this.postdata$ = this.store.select(getPost);
  }

  onUpdate(id: any) {
    if (id !== 'new') {
      this.store.select(getPostById, { id }).subscribe(data => {
        this._route.navigate(['/post/update', JSON.stringify({ data })])
      })
    } else {
      this._route.navigate(['/post/form', id])
    }
  }



}
