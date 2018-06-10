import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpectativesComponent } from './add-expectatives.component';

describe('AddExpectativesComponent', () => {
  let component: AddExpectativesComponent;
  let fixture: ComponentFixture<AddExpectativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpectativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpectativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
