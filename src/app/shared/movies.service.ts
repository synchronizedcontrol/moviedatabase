import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';
import { AddMovie } from '../assets/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private firedatabase: AngularFirestore ) { }

  getAllMovies () {
    return this.firedatabase.collection("movies").snapshotChanges();
  }

  queryMoviesById(id: string) {
    return this.firedatabase.firestore.collection("movies").doc(id).get();
  }
  
  setMovie (movie: AddMovie) {
    return this.firedatabase.firestore.collection("movies").doc().set(movie);
  }

  queryMovies(queryText: string) {
      return this.firedatabase.firestore.collection("movies").where('movie_title', '>=', queryText).where('movie_title', '<=', queryText+ '\uf8ff');
  }

  highestGrossingMovies () {
    return this.firedatabase.firestore.collection("movies").where('gross', '>', 0).orderBy("gross", "desc").limit(3);
  }

  highestRatedMovies () {
    return this.firedatabase.firestore.collection("movies").orderBy("imdb_score", "desc").limit(3);
  }
}
