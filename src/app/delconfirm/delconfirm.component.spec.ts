import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelconfirmComponent } from './delconfirm.component';

describe('DelconfirmComponent', () => {
  let component: DelconfirmComponent;
  let fixture: ComponentFixture<DelconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelconfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
