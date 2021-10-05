import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from './post-form/post-form.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostComponent } from './post.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postResucer } from './store/post.reduce';



@NgModule({
  declarations: [
    PostComponent,
    PostFormComponent,
    PostViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('post', postResucer),
    RouterModule.forChild([
      {
        path: '',
        component: PostComponent,
        children: [
          { path: 'form/:id', component: PostFormComponent },
          { path: 'update/:id', component: PostFormComponent }
        ]
      },
    ])
  ]
})
export class PostModule { }
