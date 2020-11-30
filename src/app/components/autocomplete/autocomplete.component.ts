import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MoviesService } from '../../shared/movies.service';
import { switchMap, debounceTime, tap} from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { SearchMovie } from '../../assets/Movie';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})

export class AutocompleteComponent implements OnInit {
  searchMoviesCtrl: FormControl = new FormControl();
  filteredMovies: SearchMovie[] = [];
  isLoading = false;
  
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
      this.searchMoviesCtrl.valueChanges.pipe(
        debounceTime(1000),
        tap(() => {
          this.filteredMovies = [];
          this.isLoading = true;
        }),
        switchMap(value => {
          if(value.length > 0) return this.moviesService.queryMovies(value).get()
          else {
            this.isLoading = false;
            return EMPTY
          };
        })
      ).subscribe(data => {
        if(!data) this.filteredMovies = []
        else {
          this.isLoading = false;
          data.forEach(movie => {
            this.filteredMovies.push(
              {
                id: movie.id,
                movie_title: movie.data().movie_title,
                title_year: movie.data().title_year,
                imdb_score: movie.data().imdb_score,
              }
            )
          })
        }
      })
  }
}