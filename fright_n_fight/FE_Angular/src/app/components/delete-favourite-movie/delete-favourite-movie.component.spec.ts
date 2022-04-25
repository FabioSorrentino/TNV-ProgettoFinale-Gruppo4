import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFavouriteMovieComponent } from './delete-favourite-movie.component';

describe('DeleteFavouriteMovieComponent', () => {
  let component: DeleteFavouriteMovieComponent;
  let fixture: ComponentFixture<DeleteFavouriteMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFavouriteMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFavouriteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
