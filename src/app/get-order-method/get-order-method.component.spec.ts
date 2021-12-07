import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrderMethodComponent } from './get-order-method.component';

describe('GetOrderMethodComponent', () => {
  let component: GetOrderMethodComponent;
  let fixture: ComponentFixture<GetOrderMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOrderMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOrderMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
