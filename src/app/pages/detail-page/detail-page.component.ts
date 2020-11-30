import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../shared/movies.service';
import { MovieDetail } from '../../assets/Movie';
import { calculateDuration, removePipes, setToCurrency } from '../../assets/Helpers';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  movie = {} as MovieDetail;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    if (id) {
      this.movieService.queryMoviesById(id).then(value => {
        this.movie = value.data() as MovieDetail;
        this.movie.durationCalculated = calculateDuration(this.movie.duration);
        this.movie.plot_keywords = removePipes(this.movie.plot_keywords);
        this.movie.genres = removePipes(this.movie.genres);
        this.movie.budgetCurrency = setToCurrency(this.movie.budget);
        this.movie.grossingCurrency = setToCurrency(this.movie.gross);
      })
    } else this.location.back();
  }

  goBack(): void {
    this.location.back();
  }

}
