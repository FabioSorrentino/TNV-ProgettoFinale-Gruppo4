import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentRatingComponent } from './add-comment-rating.component';

describe('AddCommentRatingComponent', () => {
  let component: AddCommentRatingComponent;
  let fixture: ComponentFixture<AddCommentRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommentRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
