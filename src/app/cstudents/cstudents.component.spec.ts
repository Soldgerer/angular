import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CstudentsComponent } from './cstudents.component';

describe('CstudentsComponent', () => {
  let component: CstudentsComponent;
  let fixture: ComponentFixture<CstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CstudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
