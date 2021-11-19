import { Component } from '@angular/core';
import {Movie, MovieService} from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-app';
  movies: Array<Movie> = [];

  constructor(movieService: MovieService) {
    movieService.getPopularMovies().subscribe(movie => {
      this.movies = movie.results;
      console.log(movie);
    });
  }
}
