import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestRatedMoviesComponent } from './highest-rated-movies.component';

describe('HighestRatedMoviesComponent', () => {
  let component: HighestRatedMoviesComponent;
  let fixture: ComponentFixture<HighestRatedMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestRatedMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestRatedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
