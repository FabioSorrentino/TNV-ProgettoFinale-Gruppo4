import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMovieDetailComponent } from './get-movie-detail.component';

describe('GetMovieDetailComponent', () => {
  let component: GetMovieDetailComponent;
  let fixture: ComponentFixture<GetMovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMovieDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
