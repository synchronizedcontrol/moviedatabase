import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/movies.service';
import { MovieDetail } from '../../assets/Movie';
import { calculateDuration, removePipes, setToCurrency } from '../../assets/Helpers';

@Component({
  selector: 'app-highest-rated-movies',
  templateUrl: './highest-rated-movies.component.html',
  styleUrls: ['./highest-rated-movies.component.scss']
})

export class HighestRatedMoviesComponent implements OnInit {
  moviesList: MovieDetail[] = [];
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getHighestGrossingMovies();
  }

  getHighestGrossingMovies = () => {
    this.moviesService.highestRatedMovies().onSnapshot((snap) => {
      snap.forEach((movie) => {
        const movieData = movie.data() as MovieDetail;
        console.log(movieData);
        movieData.id = movie.id;
        movieData.durationCalculated = calculateDuration(movieData.duration);
        movieData.plot_keywords = removePipes(movieData.plot_keywords);
        movieData.genres = removePipes(movieData.genres);
        movieData.budgetCurrency = setToCurrency(movieData.budget);
        movieData.grossingCurrency = setToCurrency(movieData.gross);
        this.moviesList.push(movieData);
      })
    })
  }

}
