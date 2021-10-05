import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { addPost } from '../store/post.action';
import { getPostById } from '../store/post.selector';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,
    private store: Store<any>,
    private _router: ActivatedRoute
  ) { }
  postForm!: FormGroup;
  ngOnInit(): void {
    this.postForm = this._fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required]
    })

    let idValue: any;
    this._router.params.subscribe(data => {
      idValue = data.id;
    })

    console.log(idValue);


    if (idValue !== 'new') {

    }


  }



  onSubmit() {
    if (this.postForm.invalid) return;
    this.store.dispatch(addPost({ post: this.postForm.value }))
    this.postForm.reset();

  }

}
