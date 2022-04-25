import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFavouriteMoviesComponent } from './get-favourite-movies.component';

describe('GetFavouriteMoviesComponent', () => {
  let component: GetFavouriteMoviesComponent;
  let fixture: ComponentFixture<GetFavouriteMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFavouriteMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFavouriteMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
