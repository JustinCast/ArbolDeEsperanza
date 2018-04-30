import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSocioeconomicComponent } from './add-socioeconomic.component';

describe('AddSocioeconomicComponent', () => {
  let component: AddSocioeconomicComponent;
  let fixture: ComponentFixture<AddSocioeconomicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSocioeconomicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSocioeconomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
