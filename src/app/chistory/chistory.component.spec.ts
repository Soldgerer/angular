import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChistoryComponent } from './chistory.component';

describe('ChistoryComponent', () => {
  let component: ChistoryComponent;
  let fixture: ComponentFixture<ChistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
