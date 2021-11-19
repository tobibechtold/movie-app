import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    component.movie = {poster_path: 'asdf', vote_average: 0, original_title: 'test', id: 0, overview: 'asdf'}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
