import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRatingComponent } from './get-rating.component';

describe('GetRatingComponent', () => {
  let component: GetRatingComponent;
  let fixture: ComponentFixture<GetRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
