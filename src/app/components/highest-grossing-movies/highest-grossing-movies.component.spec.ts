import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestGrossingMoviesComponent } from './highest-grossing-movies.component';

describe('HighestGrossingMoviesComponent', () => {
  let component: HighestGrossingMoviesComponent;
  let fixture: ComponentFixture<HighestGrossingMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestGrossingMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestGrossingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
