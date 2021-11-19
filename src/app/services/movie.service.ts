import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getPopularMovies(): Observable<SearchResult> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + environment.bearer
      })
    };
    return this.httpClient.get<SearchResult>('https://api.themoviedb.org/3/movie/popular', httpOptions);
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
