import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmploynmentComponent } from './add-employnment.component';

describe('AddEmploynmentComponent', () => {
  let component: AddEmploynmentComponent;
  let fixture: ComponentFixture<AddEmploynmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmploynmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmploynmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
