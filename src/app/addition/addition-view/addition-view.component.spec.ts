import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionViewComponent } from './addition-view.component';

describe('AdditionViewComponent', () => {
  let component: AdditionViewComponent;
  let fixture: ComponentFixture<AdditionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
