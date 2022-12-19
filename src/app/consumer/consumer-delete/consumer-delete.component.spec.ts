import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerDeleteComponent } from './consumer-delete.component';

describe('ConsumerDeleteComponent', () => {
  let component: ConsumerDeleteComponent;
  let fixture: ComponentFixture<ConsumerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
