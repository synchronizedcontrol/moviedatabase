import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { MoviesService } from '../../shared/movies.service';
import { AddMovie } from '../../assets/Movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  movieForm;

  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    this.movieForm = this.formBuilder.group({
      director_name: '',
      duration: 0,
      movie_title: '',
      genres: '',
      language: '',
      country: '',
      Title_year:'',
      imdb_score:0,
      budget: 0,
    });
  }

  ngOnInit() { }

  onSubmit(movieData: AddMovie) {
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    this.movieForm.reset();
    this.moviesService.setMovie(movieData);
    this.location.go("/");
  }

}
