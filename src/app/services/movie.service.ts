import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + environment.bearer
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  getPopularMovies(): Observable<SearchResult> {
    return this.httpClient.get<SearchResult>('https://api.themoviedb.org/3/movie/popular', this.httpOptions);
  }

  search(query: string): Observable<SearchResult> {
    return this.httpClient.get<SearchResult>(`https://api.themoviedb.org/3/search/movie?query=${query}`, this.httpOptions);
  }

  getMovie(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(`https://api.themoviedb.org/3/movie/${id}`, this.httpOptions);
  }
}

export interface Movie {
  id: number,
  original_title: string,
  overview: string,
  poster_path: string,
  vote_average: number,
}

export interface SearchResult {
  results: Array<Movie>
}
