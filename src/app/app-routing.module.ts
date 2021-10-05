import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PostFormComponent } from './post/post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { PostModule } from './post/post.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'post', loadChildren: () => import('./post/post.module').then(m => m.PostModule) },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
