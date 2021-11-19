import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../services/movie.service";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  // @ts-ignore
  @Input() movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
