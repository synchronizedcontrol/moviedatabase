import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { AddMoviePageComponent } from './pages/add-movie-page/add-movie-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'detail/:id', component: DetailPageComponent },
  { path: 'add', component: AddMoviePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
