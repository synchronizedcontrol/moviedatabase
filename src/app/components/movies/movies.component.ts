import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) {
    this.moviesList = [];
  }

  ngOnInit(): void {
    this.getMoviesList();
    this.getHighestGrossingMovies()
  }

  moviesList: any[];

  getMoviesList = () => {
    //this.moviesList = ;
    this.moviesService.getAllMovies().subscribe(res =>(this.moviesList = res))
  }

  getHighestGrossingMovies = () => {
    this.moviesService.highestGrossingMovies().onSnapshot((snap) => {
      snap.forEach((movie) => {
        console.log(movie.data())
      })
    })
  }
}
