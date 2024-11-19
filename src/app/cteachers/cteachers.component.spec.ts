import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CteachersComponent } from './cteachers.component';

describe('CteachersComponent', () => {
  let component: CteachersComponent;
  let fixture: ComponentFixture<CteachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CteachersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
