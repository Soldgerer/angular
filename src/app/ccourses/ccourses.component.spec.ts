import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcoursesComponent } from './ccourses.component';

describe('CcoursesComponent', () => {
  let component: CcoursesComponent;
  let fixture: ComponentFixture<CcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CcoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
