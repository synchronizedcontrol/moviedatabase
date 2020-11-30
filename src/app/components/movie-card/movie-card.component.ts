import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail} from '../../assets/Movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie: MovieDetail;
  constructor() {
    this.movie = {
      id: '',
      movie_title: '',
      gross: 0,
      ratings: 0,
      color: '',
      director_name: '',
      num_critic_for_reviews: 0,
      duration: 0,
      durationCalculated: '',
      director_facebook_likes: 0,
      actor_3_facebook_likes: 0,
      actor_2_name: '',
      actor_1_facebook_likes: 0,
      genres: '',
      actor_1_name: '',
      num_voted_users: 0,
      cast_total_facebook_likes: 0,
      actor_3_name: '',
      facenumber_in_poster: 0,
      plot_keywords: '',
      movie_imdb_link: '',
      num_user_for_reviews: 0,
      language: '',
      country: '',
      content_rating: '',
      budget: 0,
      budgetCurrency: '',
      grossingCurrency: '',
      title_year: 0,
      actor_2_facebook_likes: 0,
      aspect_ratio: 0,
      movie_facebook_likes: 0,
      imdb_score: 0,
    }
  }
}
