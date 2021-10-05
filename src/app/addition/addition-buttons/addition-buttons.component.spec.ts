import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionButtonsComponent } from './addition-buttons.component';

describe('AdditionButtonsComponent', () => {
  let component: AdditionButtonsComponent;
  let fixture: ComponentFixture<AdditionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
