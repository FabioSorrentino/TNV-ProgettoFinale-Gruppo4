import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFavouriteMovieComponent } from './create-favourite-movie.component';

describe('CreateFavouriteMovieComponent', () => {
  let component: CreateFavouriteMovieComponent;
  let fixture: ComponentFixture<CreateFavouriteMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFavouriteMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFavouriteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
