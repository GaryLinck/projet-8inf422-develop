import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlistingComponent } from './cardlisting.component';

describe('CardlistingComponent', () => {
  let component: CardlistingComponent;
  let fixture: ComponentFixture<CardlistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardlistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
