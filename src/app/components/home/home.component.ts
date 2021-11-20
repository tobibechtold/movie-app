import { Component, OnInit } from '@angular/core';
import {Movie, MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  movies: Array<Movie> = [];
  searchResult: Array<Movie> = [];

  constructor(public movieService: MovieService) {
    movieService.getPopularMovies().subscribe(movie => {
      this.movies = movie.results;
      console.log(movie);
    });
  }

  searchMovie(input: string) {
    if (!input) {
      return;
    }
    this.movieService.search(input).subscribe(result => {
      this.searchResult = result.results;
      console.log(result.results);
    });
  }
}
