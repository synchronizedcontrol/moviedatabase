export interface Movie {
  id: string,
  movie_title: string,
  gross: number,
  ratings: number
}

export interface SearchMovie {
  id: string,
  movie_title: string,
  title_year: number,
  imdb_score: number,
}

export interface MovieDetail extends Movie {
  color: string,
  director_name: string,
  num_critic_for_reviews: number,
  duration: number,
  durationCalculated: string,
  director_facebook_likes: number,
  actor_3_facebook_likes: number,
  actor_2_name: string,
  actor_1_facebook_likes: number,
  genres: string,
  actor_1_name: string,
  num_voted_users: number,
  cast_total_facebook_likes: number,
  actor_3_name: string,
  facenumber_in_poster: number,
  plot_keywords: string,
  movie_imdb_link: string,
  num_user_for_reviews: number,
  language: string,
  country: string,
  content_rating: string,
  budget: number,
  budgetCurrency: string,
  grossingCurrency: string,
  title_year: number,
  actor_2_facebook_likes: number,
  aspect_ratio: number,
  movie_facebook_likes: number,
  imdb_score: number,
}

export interface AddMovie {
  director_name: string,
  duration: number,
  movie_title: string,
  genres: string,
  language: string,
  country: string,
  Title_year:string,
  imdb_score:number,
  budget: number,
}