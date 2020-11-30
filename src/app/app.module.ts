import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesService } from './shared/movies.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HighestRatedMoviesComponent } from './components/highest-rated-movies/highest-rated-movies.component';
import { HighestGrossingMoviesComponent } from './components/highest-grossing-movies/highest-grossing-movies.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { AddMoviePageComponent } from './pages/add-movie-page/add-movie-page.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieListComponent,
    AutocompleteComponent,
    CardContainerComponent,
    MovieCardComponent,
    HighestRatedMoviesComponent,
    HighestGrossingMoviesComponent,
    StartPageComponent,
    DetailPageComponent,
    AddMoviePageComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
