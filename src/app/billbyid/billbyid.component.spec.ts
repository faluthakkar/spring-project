import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillbyidComponent } from './billbyid.component';

describe('BillbyidComponent', () => {
  let component: BillbyidComponent;
  let fixture: ComponentFixture<BillbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
